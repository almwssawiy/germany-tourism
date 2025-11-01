// ========== متغيرات عامة ==========
let allPlaces = touristPlaces;
let filteredPlaces = allPlaces;

// ========== عناصر DOM ==========
const placesGrid = document.getElementById('placesGrid');
const placesCount = document.getElementById('placesCount');
const noResults = document.getElementById('noResults');
const citySearch = document.getElementById('citySearch');
const categorySearch = document.getElementById('categorySearch');
const resetBtn = document.getElementById('resetBtn');

// ========== ثوابت ==========
const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e9ecef;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#DD0000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFCE00;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="800" height="600" fill="url(#bgGradient)"/>
      <circle cx="400" cy="300" r="120" fill="url(#circleGradient)" opacity="0.1"/>
      <circle cx="400" cy="300" r="90" fill="url(#circleGradient)" opacity="0.15"/>
      <g filter="url(#shadow)">
        <polygon points="350,280 400,200 450,280 420,270 380,270" fill="#DD0000" opacity="0.8"/>
        <circle cx="400" cy="190" r="25" fill="#FFCE00"/>
        <circle cx="400" cy="190" r="18" fill="#FFE66D" opacity="0.8"/>
      </g>
      <rect x="300" y="340" width="200" height="6" rx="3" fill="#DD0000" opacity="0.3"/>
      <rect x="320" y="360" width="160" height="4" rx="2" fill="#888" opacity="0.2"/>
      <text x="400" y="430" text-anchor="middle" font-size="32" font-family="Segoe UI, Arial, sans-serif" font-weight="bold" fill="#333">الصورة غير متوفرة</text>
      <text x="400" y="465" text-anchor="middle" font-size="20" font-family="Segoe UI, Arial, sans-serif" fill="#666">Bild nicht verfügbar</text>
      <text x="400" y="500" text-anchor="middle" font-size="18" font-family="Segoe UI, Arial, sans-serif" fill="#666">🔄 انقر على إعادة المحاولة</text>
    </svg>
  `);

// ========== دالة إنشاء Loading Spinner ==========
function createLoadingSpinner() {
    return `
        <div class="image-loading-overlay">
            <div class="image-loading-spinner"></div>
        </div>
    `;
}

// ========== دالة إنشاء Error Banner ==========
function createErrorBanner(place, attemptType) {
    let errorMessage = '';
    switch(attemptType) {
        case 'original':
            errorMessage = '⚠️ جاري تحميل الصورة الاحتياطية...';
            break;
        case 'local':
            errorMessage = '❌ فشل تحميل الصورة المحلية';
            break;
        case 'all-failed':
            errorMessage = '❌ فشل تحميل جميع الصور';
            break;
        default:
            errorMessage = '⚠️ خطأ في تحميل الصورة';
    }
    
    return `
        <div class="image-error-banner" role="alert" aria-live="assertive">
            <div>${errorMessage}</div>
            <button class="retry-image-btn" data-place-id="${place.id}" aria-label="إعادة محاولة تحميل الصورة">🔄 إعادة المحاولة</button>
        </div>
    `;
}

// ========== دالة إعادة محاولة تحميل الصورة ==========
function retryImageLoad(placeId, imageElement, imageContainer) {
    // إزالة جميع error banners الموجودة
    const existingBanners = imageContainer.querySelectorAll('.image-error-banner');
    existingBanners.forEach(banner => banner.remove());
    
    // إزالة جميع loading overlays الموجودة قبل إضافة واحد جديد
    const existingOverlays = imageContainer.querySelectorAll('.image-loading-overlay');
    existingOverlays.forEach(overlay => overlay.remove());
    
    // إعادة تعيين الحالة
    imageElement.dataset.fallbackAttempted = '';
    imageElement.dataset.fallbackApplied = '';
    
    // إزالة classes
    imageElement.classList.remove('image-fallback', 'using-local-fallback');
    imageContainer.classList.remove('error');
    
    // إضافة loading spinner باستخدام DOM-safe method
    imageContainer.insertAdjacentHTML('beforeend', createLoadingSpinner());
    imageContainer.classList.add('loading');
    
    // البحث عن المكان
    const place = touristPlaces.find(p => p.id === placeId);
    if (!place) {
        console.error(`❌ لم يتم العثور على المكان برقم: ${placeId}`);
        return;
    }
    
    // إعادة تعيين الصورة
    imageElement.src = place.imageUrl;
    
    // تسجيل الرسالة
    console.log(`🔄 إعادة محاولة تحميل الصورة للمكان: ${place.name}`);
}

// ========== دالة إنشاء بطاقة مكان ==========
// تنشئ بطاقة HTML لكل مكان سياحي مع:
// - صورة مع نظام fallback ذكي (URL أصلي → صورة محلية → placeholder)
// - عنوان ووصف المكان
// - معلومات المدينة والفئة
// - معالجة أخطاء تحميل الصور تلقائياً
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.setAttribute('data-category', place.category);
    card.innerHTML = `
        <div class="place-image-container">
            <img src="${place.imageUrl}" alt="${place.name}" class="place-image" loading="lazy">
        </div>
        <div class="place-content">
            <h2 class="place-title">${place.name}</h2>
            <span class="place-city">📍 ${place.city}</span>
            <p class="place-description">${place.description}</p>
            <span class="place-category">${place.category}</span>
        </div>
    `;
    
    // ========== إضافة Loading Spinner عند إنشاء البطاقة ==========
    const imageContainer = card.querySelector('.place-image-container');
    // إزالة أي overlays موجودة قبل إضافة واحد جديد
    const existingOverlays = imageContainer.querySelectorAll('.image-loading-overlay');
    existingOverlays.forEach(overlay => overlay.remove());
    imageContainer.insertAdjacentHTML('beforeend', createLoadingSpinner());
    imageContainer.classList.add('loading');
    
    // ========== معالجة أخطاء تحميل الصور بنظام fallback متعدد المستويات ==========
    // المستوى 1: محاولة تحميل الصورة من URL الأصلي (Unsplash/Wikimedia)
    // المستوى 2: محاولة تحميل الصورة الاحتياطية المحلية من مجلد images/
    // المستوى 3: عرض placeholder SVG كحل أخير
    const img = card.querySelector('.place-image');
    if (img) {
        // ========== معالج تحميل الصورة بنجاح ==========
        img.onload = function() {
            // إزالة loading spinner
            const spinner = imageContainer.querySelector('.image-loading-overlay');
            if (spinner) spinner.remove();
            imageContainer.classList.remove('loading');
            // إزالة error class عند نجاح التحميل
            imageContainer.classList.remove('error');
            
            // تسجيل رسالة نجاح
            console.log(`✅ تم تحميل الصورة بنجاح: ${place.name}`);
        };
        
        // ========== معالج أخطاء تحميل الصورة ==========
        img.onerror = function() {
            // منع التكرار اللانهائي
            if (img.dataset.fallbackApplied === 'true') return;
            
            // المستوى 2: محاولة تحميل الصورة المحلية
            if (!img.dataset.fallbackAttempted) {
                // التحقق من أن place.id صحيح قبل محاولة استخدامه
                if (!Number.isFinite(place.id) || place.id <= 0) {
                    console.group(`🖼️ معالجة صورة: ${place.name}`);
                    console.warn(`❌ معرف المكان غير صالح للمكان: ${place.name}`);
                    console.log(`🖼️ عرض placeholder SVG مباشرة`);
                    console.groupEnd();
                    
                    // إزالة loading spinner
                    const spinner = imageContainer.querySelector('.image-loading-overlay');
                    if (spinner) spinner.remove();
                    imageContainer.classList.remove('loading');
                    
                    img.src = PLACEHOLDER_IMAGE;
                    img.classList.add('image-fallback');
                    img.title = 'الصورة غير متوفرة - تم عرض صورة احتياطية';
                    img.dataset.fallbackApplied = 'true';
                    
                    // إزالة أي banners موجودة قبل إضافة واحد جديد
                    const existingBanners = imageContainer.querySelectorAll('.image-error-banner');
                    existingBanners.forEach(banner => banner.remove());
                    
                    // إضافة error banner باستخدام DOM-safe method
                    imageContainer.classList.add('error');
                    imageContainer.insertAdjacentHTML('beforeend', createErrorBanner(place, 'all-failed'));
                    return;
                }
                
                // بناء مسار الصورة المحلية باستخدام document.baseURI لدعم النشر تحت مسارات فرعية
                const base = document.baseURI || window.location.href;
                const localImagePath = new URL(`images/place-${place.id}.jpg`, base).href;
                
                console.group(`🖼️ معالجة صورة: ${place.name}`);
                console.log(`⚠️ فشل تحميل الصورة الأصلية`);
                console.log(`🔄 جاري محاولة تحميل الصورة الاحتياطية المحلية`);
                console.groupEnd();
                
                // إزالة loading spinner القديم
                const spinner = imageContainer.querySelector('.image-loading-overlay');
                if (spinner) spinner.remove();
                imageContainer.classList.remove('loading');
                
                // إزالة أي banners موجودة قبل إضافة واحد جديد
                const existingBanners = imageContainer.querySelectorAll('.image-error-banner');
                existingBanners.forEach(banner => banner.remove());
                
                // إضافة error banner باستخدام DOM-safe method
                imageContainer.insertAdjacentHTML('beforeend', createErrorBanner(place, 'original'));
                imageContainer.classList.add('error');
                
                // بعد 500ms، أزل error banner وأضف loading spinner جديد
                setTimeout(() => {
                    const banner = imageContainer.querySelector('.image-error-banner');
                    if (banner) banner.remove();
                    // إزالة أي overlays موجودة قبل إضافة واحد جديد
                    const existingOverlays = imageContainer.querySelectorAll('.image-loading-overlay');
                    existingOverlays.forEach(overlay => overlay.remove());
                    imageContainer.insertAdjacentHTML('beforeend', createLoadingSpinner());
                    imageContainer.classList.add('loading');
                }, 500);
                
                img.src = localImagePath;
                img.dataset.fallbackAttempted = 'local';
                img.classList.add('using-local-fallback');
                return;
            }
            
            // المستوى 3: عرض placeholder SVG
            if (img.dataset.fallbackAttempted === 'local') {
                console.group(`🖼️ معالجة صورة: ${place.name}`);
                console.warn(`❌ فشل تحميل جميع الصور`);
                console.warn(`📍 الصورة الأصلية: ${place.imageUrl}`);
                console.warn(`📍 الصورة المحلية: ./images/place-${place.id}.jpg`);
                console.log(`🖼️ عرض placeholder SVG`);
                console.groupEnd();
                
                // إزالة loading spinner
                const spinner = imageContainer.querySelector('.image-loading-overlay');
                if (spinner) spinner.remove();
                imageContainer.classList.remove('loading');
                imageContainer.classList.add('error');
                
                img.src = PLACEHOLDER_IMAGE;
                img.classList.remove('using-local-fallback');
                img.classList.add('image-fallback');
                img.title = 'الصورة غير متوفرة - تم عرض صورة احتياطية';
                img.dataset.fallbackApplied = 'true';
                
                // إزالة أي banners موجودة قبل إضافة واحد جديد
                const existingBanners = imageContainer.querySelectorAll('.image-error-banner');
                existingBanners.forEach(banner => banner.remove());
                
                // إضافة error banner باستخدام DOM-safe method
                imageContainer.insertAdjacentHTML('beforeend', createErrorBanner(place, 'all-failed'));
            }
        };
    }
    
    // ========== إضافة Event Listener للـ Retry Button ==========
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('retry-image-btn')) {
            const placeId = parseInt(e.target.dataset.placeId);
            const img = card.querySelector('.place-image');
            const imageContainer = card.querySelector('.place-image-container');
            if (img && imageContainer) {
                retryImageLoad(placeId, img, imageContainer);
            }
        }
    });
    
    return card;
}

// ========== دالة عرض الأماكن ==========
function displayPlaces(places) {
    // مسح المحتوى السابق
    placesGrid.innerHTML = '';
    
    // التحقق من وجود نتائج
    if (places.length === 0) {
        noResults.style.display = 'block';
        placesCount.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    placesCount.style.display = 'block';
    
    // تحديث عداد الأماكن
    placesCount.textContent = `✨ تم العثور على ${places.length} مكان سياحي`;
    
    // إضافة البطاقات
    places.forEach(place => {
        const card = createPlaceCard(place);
        placesGrid.appendChild(card);
    });
    
    // إضافة animation للبطاقات
    const cards = document.querySelectorAll('.place-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ========== دالة البحث والفلترة ========== 
let debounceTimeout;
function filterPlaces() {
    const cityValue = citySearch.value.trim().toLowerCase();
    const categoryValue = categorySearch.value;
    filteredPlaces = allPlaces.filter(place => {
        const matchCity = cityValue === '' || 
                         place.city.toLowerCase().includes(cityValue) ||
                         place.name.toLowerCase().includes(cityValue);
        const matchCategory = categoryValue === '' || 
                             place.category === categoryValue;
        return matchCity && matchCategory;
    });
    displayPlaces(filteredPlaces);
}

// ========== دالة إعادة التعيين ==========
function resetFilters() {
    citySearch.value = '';
    categorySearch.value = '';
    filteredPlaces = allPlaces;
    displayPlaces(filteredPlaces);
}

// ========== دالة البحث حسب المدينة ==========
function searchByCity() {
    filterPlaces();
}

// ========== دالة البحث حسب الفئة ==========
function searchByCategory() {
    filterPlaces();
}

// ========== Event Listeners ==========
// البحث الفوري عند الكتابة
citySearch.addEventListener('input', function() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(filterPlaces, 250);
});

// البحث عند تغيير الفئة
categorySearch.addEventListener('change', filterPlaces);

// زر إعادة التعيين
resetBtn.addEventListener('click', function() {
    clearTimeout(debounceTimeout);
    resetFilters();
});

// ========== تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
    // عرض جميع الأماكن عند تحميل الصفحة
    displayPlaces(allPlaces);
    
    // إضافة تأثير smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // رسالة ترحيب في console
    console.log('%c🇩🇪 أهلاً أبو العباس في رحلاتك - تحياتي يونس', 
                'color: #FFCE00; font-size: 20px; font-weight: bold; background: #000; padding: 10px;');
    console.log('%cموقع الأماكن السياحية في ألمانيا', 
                'color: #DD0000; font-size: 16px;');
    
    // تحديث تلقائي للروابط في الإنتاج (GitHub Pages)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const currentUrl = window.location.href;
        if (canonicalLink) canonicalLink.href = currentUrl;
        if (ogUrl) ogUrl.content = currentUrl;
    }
});