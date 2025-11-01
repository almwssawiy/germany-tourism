// بيانات الأماكن السياحية في ألمانيا
const touristPlaces = [
    {
        id: 1,
        name: "بوابة براندنبورغ",
        city: "برلين",
        category: "معالم تاريخية",
        description: "رمز برلين التاريخي وأحد أشهر المعالم في ألمانيا. بُنيت في القرن الثامن عشر وتعتبر رمزاً للوحدة الألمانية.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/800px-Brandenburger_Tor_abends.jpg",
        coordinates: { lat: 52.5163, lng: 13.3777 }
    },
    {
        id: 2,
        name: "قصر نويشفانشتاين",
        city: "بافاريا",
        category: "قصور",
        description: "قصر خيالي على قمة جبل في جبال الألب البافارية. ألهم تصميم قلعة ديزني الشهيرة ويعد من أجمل القصور في العالم.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/800px-Schloss_Neuschwanstein_2013.jpg",
        coordinates: { lat: 47.5576, lng: 10.7498 }
    },
    {
        id: 3,
        name: "كاتدرائية كولونيا",
        city: "كولونيا",
        category: "معالم دينية",
        description: "تحفة معمارية قوطية وأحد مواقع التراث العالمي لليونسكو. استغرق بناؤها أكثر من 600 عام وتعد من أطول الكنائس في العالم.",
        imageUrl: "https://images.unsplash.com/photo-1600758208050-a22f17fc5e4b?auto=format&q=80&w=1200",
        coordinates: { lat: 50.9413, lng: 6.9583 }
    },
    {
        id: 4,
        name: "الغابة السوداء",
        city: "بادن فورتمبيرغ",
        category: "طبيعة",
        description: "منطقة طبيعية خلابة مشهورة بغاباتها الكثيفة وقراها الساحرة. موطن كعكة الغابة السوداء الشهيرة والساعات الخشبية التقليدية.",
        imageUrl: "https://images.unsplash.com/photo-1590747356650-7a8a591b8b68?auto=format&q=80&w=1200",
        coordinates: { lat: 48.3, lng: 8.15 }
    },
    {
        id: 5,
        name: "جزيرة المتاحف",
        city: "برلين",
        category: "متاحف",
        description: "مجمع متاحف عالمي يضم خمسة متاحف رئيسية على جزيرة في نهر شبريه. يحتوي على كنوز أثرية من مختلف الحضارات.",
        imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d2?auto=format&q=80&w=1200",
        coordinates: { lat: 52.5169, lng: 13.4019 }
    },
    {
        id: 6,
        name: "قلعة هايدلبرغ",
        city: "هايدلبرغ",
        category: "قلاع",
        description: "أطلال قلعة رومانسية تطل على نهر نيكار والمدينة القديمة. تجمع بين العمارة القوطية وعصر النهضة وتعد من أشهر الأطلال في ألمانيا.",
        imageUrl: "https://images.unsplash.com/photo-1611435452681-c05c92b21f4e?auto=format&q=80&w=1200",
        coordinates: { lat: 49.4106, lng: 8.7153 }
    },
    {
        id: 7,
        name: "ميدان ماريان",
        city: "ميونخ",
        category: "ساحات",
        description: "الساحة المركزية التاريخية في قلب ميونخ. تشتهر ببرجها الذي يحتوي على ساعة فلكية وأجراس موسيقية تعزف يومياً.",
        imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&q=80&w=1200",
        coordinates: { lat: 48.1374, lng: 11.5755 }
    },
    {
        id: 8,
        name: "جدار برلين",
        city: "برلين",
        category: "معالم تاريخية",
        description: "نصب تذكاري لتاريخ ألمانيا المقسمة. الجزء المتبقي يُعرف بـ 'معرض الجانب الشرقي' ويحتوي على لوحات جدارية فنية شهيرة.",
        imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&q=80&w=1200",
        coordinates: { lat: 52.5058, lng: 13.4397 }
    },
    {
        id: 9,
        name: "قصر سانسوسي",
        city: "بوتسدام",
        category: "قصور",
        description: "قصر صيفي فخم بُني في القرن الثامن عشر لفريدريك الكبير. يُعرف بـ 'فرساي الألمانية' ويحيط به حدائق رائعة.",
        imageUrl: "https://images.unsplash.com/photo-1544966503-7cc4ac65564d?auto=format&q=80&w=1200",
        coordinates: { lat: 52.4042, lng: 13.0386 }
    },
    {
        id: 10,
        name: "وادي نهر الراين",
        city: "راينلاند",
        category: "طبيعة",
        description: "منطقة خلابة مع قلاع قديمة وكروم عنب على ضفاف نهر الراين. أحد مواقع التراث العالمي وموطن أسطورة لوريلاي الشهيرة.",
        imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&q=80&w=1200",
        coordinates: { lat: 50.1, lng: 7.6 }
    },
    {
        id: 11,
        name: "بوابة هولستن",
        city: "لوبيك",
        category: "معالم تاريخية",
        description: "بوابة مدينة قوطية من الطوب الأحمر تعود للقرن الخامس عشر. رمز مدينة لوبيك وأحد أشهر معالم شمال ألمانيا.",
        imageUrl: "https://images.unsplash.com/photo-1570129473507-1c15f81c8b90?auto=format&q=80&w=1200",
        coordinates: { lat: 53.8655, lng: 10.6764 }
    },
    {
        id: 12,
        name: "الحديقة الإنجليزية",
        city: "ميونخ",
        category: "حدائق",
        description: "واحدة من أكبر الحدائق الحضرية في العالم، أكبر من سنترال بارك في نيويورك. تحتوي على بحيرات وجداول ومعبد صيني.",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&q=80&w=1200",
        coordinates: { lat: 48.1642, lng: 11.6056 }
    },
    {
        id: 13,
        name: "قلعة فارتبورغ",
        city: "آيزناخ",
        category: "قلاع",
        description: "قلعة تاريخية على قمة تل تعود للقرن الحادي عشر. مكان ترجم فيه مارتن لوثر الكتاب المقدس إلى الألمانية.",
        imageUrl: "https://images.unsplash.com/photo-1606925797300-0b53e0e6a3a8?auto=format&q=80&w=1200",
        coordinates: { lat: 50.9647, lng: 10.3119 }
    },
    {
        id: 14,
        name: "روتنبورغ أوب در تاوبر",
        city: "بافاريا",
        category: "مدن تاريخية",
        description: "مدينة قروسطية محفوظة بشكل مثالي مع أسوار وأبراج كاملة. تبدو وكأنها خرجت من قصة خيالية بشوارعها المرصوفة بالحصى.",
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&q=80&w=1200",
        coordinates: { lat: 49.3779, lng: 10.1786 }
    },
    {
        id: 15,
        name: "جزيرة روغن",
        city: "بحر البلطيق",
        category: "شواطئ",
        description: "أكبر جزيرة ألمانية مع شواطئ رملية بيضاء وجروف طباشيرية مذهلة. وجهة صيفية شهيرة على ساحل بحر البلطيق.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&q=80&w=1200",
        coordinates: { lat: 54.5264, lng: 13.3919 }
    },
    {
        id: 16,
        name: "Europa Park",
        city: "روست",
        category: "حدائق ترفيهية",
        description: "أكبر حديقة ترفيهية في ألمانيا وثاني أكبر منتزه في أوروبا. يحتوي على أكثر من 100 لعبة وعرض موزعة على 18 منطقة أوروبية مختلفة.",
        imageUrl: "https://images.unsplash.com/photo-1567486157993-99b4c7a4e9c6?auto=format&q=80&w=1200",
        coordinates: { lat: 48.2662, lng: 7.7217 }
    },
    {
        id: 17,
        name: "Phantasialand",
        city: "برول",
        category: "حدائق ترفيهية",
        description: "حديقة ترفيهية عالمية المستوى تشتهر بألعابها المثيرة وعوالمها الموضوعية المذهلة مثل Klugheim وChina Town.",
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&q=80&w=1200",
        coordinates: { lat: 50.7989, lng: 6.8797 }
    },
    {
        id: 18,
        name: "حديقة حيوان برلين",
        city: "برلين",
        category: "حدائق حيوان",
        description: "أقدم حديقة حيوان في ألمانيا وأكثرها شهرة. تضم أكثر من 20,000 حيوان من 1,200 نوع مختلف، بما في ذلك الباندا العملاقة.",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&q=80&w=1200",
        coordinates: { lat: 52.5075, lng: 13.3375 }
    },
    {
        id: 19,
        name: "حديقة حيوان هاغنبيك",
        city: "هامبورغ",
        category: "حدائق حيوان",
        description: "أول حديقة حيوان في العالم بدون أقفاص، تأسست عام 1907. تشتهر بتصميمها المبتكر وبيئاتها الطبيعية للحيوانات.",
        imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&q=80&w=1200",
        coordinates: { lat: 53.5947, lng: 9.9386 }
    },
    {
        id: 20,
        name: "Sea Life ميونخ",
        city: "ميونخ",
        category: "أكواريوم",
        description: "أكواريوم ضخم يضم أكثر من 10,000 كائن بحري. يحتوي على نفق زجاجي يمر عبر حوض أسماك القرش.",
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&q=80&w=1200",
        coordinates: { lat: 48.1775, lng: 11.5456 }
    },
    {
        id: 21,
        name: "Legoland Deutschland",
        city: "غونزبورغ",
        category: "حدائق ترفيهية",
        description: "حديقة ترفيهية مخصصة للعائلات مبنية بالكامل من مكعبات ليغو. تحتوي على 8 مناطق موضوعية و64 لعبة.",
        imageUrl: "https://images.unsplash.com/photo-1619535868439-988ffbd69f34?auto=format&q=80&w=1200",
        coordinates: { lat: 48.4244, lng: 10.2989 }
    },
    {
        id: 22,
        name: "Tropical Islands",
        city: "براند",
        category: "متنزهات",
        description: "أكبر منتجع استوائي داخلي في العالم، يقع في قبة ضخمة كانت سابقاً حظيرة طائرات. يحتوي على شواطئ رملية وغابات مطيرة.",
        imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&q=80&w=1200",
        coordinates: { lat: 52.0389, lng: 13.7486 }
    },
    {
        id: 23,
        name: "حديقة حيوان ميونخ (Tierpark Hellabrunn)",
        city: "ميونخ",
        category: "حدائق حيوان",
        description: "أول حديقة حيوان جغرافية في العالم، حيث تُجمع الحيوانات حسب قاراتها الأصلية. تقع في موقع طبيعي خلاب على نهر إيزار.",
        imageUrl: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&q=80&w=1200",
        coordinates: { lat: 48.0989, lng: 11.5564 }
    },
    {
        id: 24,
        name: "Movie Park Germany",
        city: "بوتروب",
        category: "حدائق ترفيهية",
        description: "حديقة ترفيهية بموضوع هوليوود والأفلام. تحتوي على ألعاب مثيرة وعروض حية مستوحاة من أفلام شهيرة.",
        imageUrl: "https://images.unsplash.com/photo-1560258018-c7db7645254f?auto=format&q=80&w=1200",
        coordinates: { lat: 51.6167, lng: 6.9758 }
    },
    {
        id: 25,
        name: "Heide Park",
        city: "سولتاو",
        category: "حدائق ترفيهية",
        description: "ثاني أكبر حديقة ترفيهية في ألمانيا. تشتهر بألعابها المثيرة مثل Colossos وKrake.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&q=80&w=1200",
        coordinates: { lat: 53.0236, lng: 9.8781 }
    },
    {
        id: 26,
        name: "برج التلفزيون في برلين",
        city: "برلين",
        category: "معالم تاريخية",
        description: "أطول مبنى في ألمانيا بارتفاع 368 متر. يحتوي على مطعم دوار يوفر إطلالة بانورامية 360 درجة على المدينة.",
        imageUrl: "https://images.unsplash.com/photo-1592903204856-76880fe8448f?auto=format&q=80&w=1200",
        coordinates: { lat: 52.5208, lng: 13.4094 }
    },
    {
        id: 27,
        name: "قصر نيمفنبورغ",
        city: "ميونخ",
        category: "قصور",
        description: "قصر صيفي باروكي فخم كان مقر إقامة حكام بافاريا. يحيط به حديقة واسعة على الطراز الإنجليزي.",
        imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&q=80&w=1200",
        coordinates: { lat: 48.1583, lng: 11.5033 }
    },
    {
        id: 28,
        name: "قلعة هوهنتسولرن",
        city: "بادن فورتمبيرغ",
        category: "قلاع",
        description: "قلعة رائعة على قمة جبل، مقر عائلة هوهنتسولرن الملكية. تعد من أجمل القلاع في أوروبا.",
        imageUrl: "https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&q=80&w=1200",
        coordinates: { lat: 48.3236, lng: 8.9672 }
    },
    {
        id: 29,
        name: "متحف BMW",
        city: "ميونخ",
        category: "متاحف",
        description: "متحف مخصص لتاريخ شركة BMW. يعرض سيارات ودراجات نارية كلاسيكية وحديثة في مبنى معماري مذهل.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&q=80&w=1200",
        coordinates: { lat: 48.1769, lng: 11.5589 }
    },
    {
        id: 30,
        name: "ميناء هامبورغ",
        city: "هامبورغ",
        category: "معالم تاريخية",
        description: "أكبر ميناء في ألمانيا وثاني أكبر ميناء في أوروبا. منطقة Speicherstadt التاريخية مدرجة على قائمة التراث العالمي.",
        imageUrl: "https://images.unsplash.com/photo-1612952959381-4525b0bce7e6?auto=format&q=80&w=1200",
        coordinates: { lat: 53.5436, lng: 9.9764 }
    },
    {
        id: 31,
        name: "قصر فورتسبورغ",
        city: "فورتسبورغ",
        category: "قصور",
        description: "تحفة معمارية باروكية وأحد أجمل القصور في أوروبا. يحتوي على أكبر لوحة سقف في العالم رسمها تيبولو.",
        imageUrl: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&q=80&w=1200",
        coordinates: { lat: 49.7931, lng: 9.9364 }
    },
    {
        id: 32,
        name: "كنيسة فريدريش",
        city: "دريسدن",
        category: "معالم دينية",
        description: "كنيسة باروكية لوثرية أعيد بناؤها بعد الحرب العالمية الثانية. رمز للمصالحة والسلام.",
        imageUrl: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&q=80&w=1200",
        coordinates: { lat: 51.0519, lng: 13.7414 }
    },
    {
        id: 33,
        name: "حديقة بوتسدام",
        city: "بوتسدام",
        category: "حدائق",
        description: "مجموعة من القصور والحدائق الملكية مدرجة على قائمة التراث العالمي. تشمل قصر سانسوسي وقصر الأورانجري.",
        imageUrl: "https://images.unsplash.com/photo-1588488143818-a81d8b60a0f0?auto=format&q=80&w=1200",
        coordinates: { lat: 52.4, lng: 13.0667 }
    },
    {
        id: 34,
        name: "متحف مرسيدس بنز",
        city: "شتوتغارت",
        category: "متاحف",
        description: "متحف يروي تاريخ السيارات من 1886 حتى اليوم. يعرض أكثر من 160 سيارة في مبنى حلزوني مبتكر.",
        imageUrl: "https://images.unsplash.com/photo-1492144534651-1be6ee0379c3?auto=format&q=80&w=1200",
        coordinates: { lat: 48.7886, lng: 9.2328 }
    },
    {
        id: 35,
        name: "جزيرة لينداو",
        city: "بحيرة كونستانس",
        category: "مدن تاريخية",
        description: "جزيرة ساحرة في بحيرة كونستانس مع مدينة قديمة محفوظة بشكل جميل. تشتهر بميناءها مع تمثال الأسد والمنارة.",
        imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&q=80&w=1200",
        coordinates: { lat: 47.5456, lng: 9.6839 }
    },
    {
        id: 36,
        name: "Grand Place بروكسل",
        city: "بروكسل",
        category: "ساحات",
        description: "الساحة المركزية في بروكسل وأحد أجمل الساحات في أوروبا. محاطة بمباني قوطية وباروكية مذهلة ومدرجة على قائمة التراث العالمي.",
        imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8467, lng: 4.3525 }
    },
    {
        id: 37,
        name: "Atomium",
        city: "بروكسل",
        category: "معالم تاريخية",
        description: "نصب تذكاري على شكل ذرة حديد مكبرة 165 مليار مرة. بُني لمعرض إكسبو 1958 وأصبح رمز بروكسل.",
        imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8950, lng: 4.3417 }
    },
    {
        id: 38,
        name: "Manneken Pis",
        city: "بروكسل",
        category: "معالم تاريخية",
        description: "تمثال برونزي صغير لطفل يتبول، أصبح رمزاً لروح الدعابة البلجيكية. يُلبس أزياء مختلفة في المناسبات.",
        imageUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8450, lng: 4.3500 }
    },
    {
        id: 39,
        name: "المدينة القديمة في بروج",
        city: "بروج",
        category: "مدن تاريخية",
        description: "مدينة قروسطية ساحرة تُلقب بـ'فينيسيا الشمال'. قنواتها المائية ومبانيها القوطية تجعلها من أجمل المدن الأوروبية.",
        imageUrl: "https://images.unsplash.com/photo-1555993537-1542bf6e1b6d?auto=format&q=80&w=1200",
        coordinates: { lat: 51.2093, lng: 3.2247 }
    },
    {
        id: 40,
        name: "برج الجرس في بروج",
        city: "بروج",
        category: "معالم تاريخية",
        description: "برج قوطي يبلغ ارتفاعه 83 متر مع 47 جرساً. يوفر إطلالة بانورامية على المدينة بعد صعود 366 درجة.",
        imageUrl: "https://images.unsplash.com/photo-1603694087185-7fb0e9c0c3e3?auto=format&q=80&w=1200",
        coordinates: { lat: 51.2083, lng: 3.2247 }
    },
    {
        id: 41,
        name: "قلعة غرافنستين",
        city: "غنت",
        category: "قلاع",
        description: "قلعة قروسطية محفوظة بشكل رائع من القرن الثاني عشر. تحتوي على متحف للأسلحة وغرف تعذيب تاريخية.",
        imageUrl: "https://images.unsplash.com/photo-1560693753-8ac5a0ae3dc6?auto=format&q=80&w=1200",
        coordinates: { lat: 51.0575, lng: 3.7203 }
    },
    {
        id: 42,
        name: "كاتدرائية أنتويرب",
        city: "أنتويرب",
        category: "معالم دينية",
        description: "أكبر كنيسة قوطية في بلجيكا وأحد مواقع التراث العالمي. تحتوي على لوحات لروبنز وبرج يبلغ ارتفاعه 123 متر.",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&q=80&w=1200",
        coordinates: { lat: 51.2203, lng: 4.4014 }
    },
    {
        id: 43,
        name: "متحف ماغريت",
        city: "بروكسل",
        category: "متاحف",
        description: "متحف مخصص للفنان السريالي البلجيكي رينيه ماغريت. يضم أكبر مجموعة من أعماله في العالم.",
        imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8425, lng: 4.3583 }
    },
    {
        id: 44,
        name: "متحف الشوكولاتة البلجيكية",
        city: "بروكسل",
        category: "متاحف",
        description: "متحف تفاعلي يروي تاريخ الشوكولاتة البلجيكية الشهيرة. يتضمن عروض تحضير الشوكولاتة وتذوق مجاني.",
        imageUrl: "https://images.unsplash.com/photo-1519869325930-2811486b3001?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8467, lng: 4.3542 }
    },
    {
        id: 45,
        name: "قصر العدل في بروكسل",
        city: "بروكسل",
        category: "معالم تاريخية",
        description: "أكبر مبنى قضائي في العالم بُني في القرن التاسع عشر. تصميمه المعماري الضخم يهيمن على أفق المدينة.",
        imageUrl: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8367, lng: 4.3511 }
    },
    {
        id: 46,
        name: "حديقة سينكونتينير",
        city: "بروكسل",
        category: "حدائق",
        description: "أكبر حديقة عامة في بروكسل تحتوي على قوس النصر الضخم ومتاحف فنية. مكان مثالي للنزهات والفعاليات.",
        imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8408, lng: 4.3917 }
    },
    {
        id: 47,
        name: "Mini-Europe",
        city: "بروكسل",
        category: "متنزهات",
        description: "حديقة مصغرة تحتوي على نماذج مصغرة لأشهر معالم أوروبا بمقياس 1:25. تضم أكثر من 350 مبنى.",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&q=80&w=1200",
        coordinates: { lat: 50.8947, lng: 4.3414 }
    },
    {
        id: 48,
        name: "قناة غنت",
        city: "غنت",
        category: "معالم تاريخية",
        description: "قنوات مائية تاريخية تمر عبر قلب المدينة القديمة. رحلات القوارب توفر منظوراً فريداً للمباني القروسطية.",
        imageUrl: "https://images.unsplash.com/photo-1603726832877-8f3c85a02b3b?auto=format&q=80&w=1200",
        coordinates: { lat: 51.0543, lng: 3.7174 }
    },
    {
        id: 49,
        name: "محطة أنتويرب المركزية",
        city: "أنتويرب",
        category: "معالم تاريخية",
        description: "واحدة من أجمل محطات القطار في العالم. تصميمها المعماري الفخم يجمع بين عدة أنماط من القرن العشرين.",
        imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&q=80&w=1200",
        coordinates: { lat: 51.2172, lng: 4.4214 }
    },
    {
        id: 50,
        name: "Walibi Belgium",
        city: "وافر",
        category: "حدائق ترفيهية",
        description: "أكبر حديقة ترفيهية في بلجيكا مع أكثر من 40 لعبة مثيرة. تشتهر بألعاب الرولر كوستر المائية والجافة.",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&q=80&w=1200",
        coordinates: { lat: 50.6989, lng: 4.5917 }
    }
];