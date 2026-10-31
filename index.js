(function () {
      const STORAGE_KEY = 'pif-products-draft-v1';
      const SESSION_UNLOCK_KEY = 'pif-editor-unlocked';
      const DEFAULT_PASSWORD = 'changeme';

      const BASELINE_PRODUCTS = [
  {
    "id": "p01",
    "name": "Засіб для миття та очищення ванних кімнат, душових кабінок, кранів",
    "shortCategory": "Ванна та сантехніка",
    "categoryKey": "bath",
    "formulaBadge": "Кислотна формула · Антиналіт",
    "phLevel": "pH 2.5 (Кислотний)",
    "b2bTag": "Дім та HoReCa",
    "image": "./images/product-2.webp",
    "canvasImage": "./images/p01.jpg",
    "sizes": [
      {
        "label": "500мл (з розпилювачем)",
        "price": "34.00"
      },
      {
        "label": "5л",
        "price": "198.00"
      }
    ],
    "summary": "Кислотний антиналіт для акрилу, хрому, скла й кераміки.",
    "purpose": "Очищає від вапняного та мильного нальоту, іржі та бруду акрилові, емальовані, керамічні, хромовані, нержавіючі, пластикові, скляні поверхні та змішувачі у ванних кімнатах і душових кабінах.",
    "usage": "Нанести засіб за допомогою розпилювача на забруднену поверхню, потерти щіткою або губкою і змити водою. Для видалення стійкого нальоту або плям іржі витримати засіб на поверхні 5–10 хвилин, потерти щіткою і ретельно змити водою.",
    "composition": "Вода підготовлена > 30%, ортофосфорна кислота, органічні кислоти від 2 до 5%, ПАР < 5%, віддушка, барвник < 0,2%. Використовувати гумові рукавички, уникати контакту з очима.",
    "description": "Очищає від вапняного та мильного нальоту, іржі та бруду акрилові, емальовані, керамічні, хромовані, нержавіючі, пластикові, скляні поверхні та крани. Склад: Вода підготовлена > 30%, ортофосфорна кислота, органічні кислоти від 2 до 5 %, ПАР <5%, віддушка, барвник <0,2%. Нанести засіб на забруднену поверхню, потерти щіткою і змити водою. Для видалення стійкого бруду або плям іржі витримати засіб на поверхні 5-10 хв, потерти щіткою і змити водою."
  },
  {
    "id": "p02",
    "name": "Засіб для видалення забруднень каналізаційних труб та сифонів",
    "shortCategory": "Труби та сифони",
    "categoryKey": "pipes",
    "formulaBadge": "Лужний концентрат · Проти засмічень",
    "phLevel": "pH 13.5 (Сильнолужний)",
    "b2bTag": "Хіт продажів",
    "image": "./images/product-15.webp",
    "canvasImage": "./images/p02.jpg",
    "sizes": [
      {
        "label": "1 л",
        "price": "44.50"
      },
      {
        "label": "5л",
        "price": "143.50"
      }
    ],
    "summary": "Сильнолужний концентрат проти засмічень труб і сифонів.",
    "purpose": "Використовується для глибокого очищення каналізаційних труб, сифонів кухонних мийок, умивальників та ванн, швидкого розчинення жирових і білкових відкладень, волосся та залишків їжі.",
    "usage": "Залити 100–200 мл засобу у зливний отвір і залишити на 4 години (найкраще на ніч). Після цього промити великою кількістю гарячої води. Для профілактики рекомендується застосовувати не рідше ніж раз на місяць.",
    "composition": "Містить їдкий луг (гідроксид натрію). Не змішувати з кислотними або іншими засобами! Зберігати ретельно закритим у вертикальному положенні у місцях, недоступних дітям. Обов'язково використовувати гумові рукавички.",
    "description": "Використовується для очищення каналізаційних труб, сифонів кухонних мийок та ванн, видалення жирових та білкових забруднень, волосся, залишків їжі, знищення неприємного запаху. Залити (100-200 мл) і залишити на 4 години, краще на ніч. Після цього промити велику кількість гарячої води. Для профілактики рекомендується застосовувати не рідше ніж раз на місяць. Заходи безпеки: Засіб містить їдкий луг, не рекомендується змішувати його з іншими засобами. Боїться нагріву. Засіб необхідно зберігати ретельно закритим у вертикальному положенні у місцях, недоступних дітям. При попаданні в очі чи на шкіру - ретельно промити водою. Обов'язково використовуйте гумові рукавички під час роботи з цим продуктом."
  },
  {
    "id": "p03",
    "name": "Засіб для видалення жиру, нагару та кіптяви",
    "shortCategory": "Антижир та кухня",
    "categoryKey": "degreaser",
    "formulaBadge": "Антижир Актив · Спрей / Рідина",
    "phLevel": "pH 13.0 (Лужний)",
    "b2bTag": "Кухня та гриль",
    "image": "./images/product-3.webp",
    "canvasImage": "./images/p03.jpg",
    "sizes": [
      {
        "label": "500мл",
        "price": "26.00"
      },
      {
        "label": "5л",
        "price": "186.00"
      }
    ],
    "summary": "Швидко знімає жир, нагар і кіптяву з кухонних поверхонь.",
    "purpose": "Ідеально підходить для миття застарілих залишків від смаження, випічки, видалення запеченого жиру, нагару та кіптяви з кухонних плит, духових шаф, грилів та професійного обладнання.",
    "usage": "Перед застосуванням збовтати, нанести на поверхню на 5–10 хв. Сильно забруднені місця протерти губкою та змити водою. Для фритюрниць: розвести водою 1:1, 1:2 або 1:5 (100–200 мл на 1 л води), залишити на 1–2 год, очистити щіткою та промити проточною водою.",
    "composition": "Лужний розчинник жиру та ПАР. Увага: не застосовувати для обробки алюмінієвих, емальованих, скляних та лакофарбових поверхонь! Під час роботи обов'язково використовувати гумові рукавички.",
    "description": "Спосіб застосування: перед застосуванням вміст пляшки збовтати, нанести на поверхню на 5-10 хв. Сильно забруднені місця протерти губкою. Змити водою. Ідеально підходить для миття застарілих залишків від смаження, випічки, видалення запеченого жиру, нагару, кіптяви. Для фритюрниць: залежно від ступеню та характеру забруднень розвести засіб водою 1:1, 1:2 або 1:5, налити розчин у фритюрницю (вище відмітки рівня олії), додати 100-200 мл засобу на кожен літр води, залишити на 1-2 години, після чого воду злити, поверхню очистити щіткою та ретельно промити проточною водою. Не застосовувати засіб для обробки алюмінієвих, емальованих, скляних та лакофарбових поверхонь! Під час роботи використовувати гумові рукавички."
  },
  {
    "id": "p04",
    "name": "Засіб для видалення жиру, нагару та кіптяви (Каністра 5л)",
    "shortCategory": "Антижир та кухня",
    "categoryKey": "degreaser",
    "formulaBadge": "HoReCa 5Л · Для фритюрниць і печей",
    "phLevel": "pH 13.0 (Лужний)",
    "b2bTag": "Проф. фасування 5Л",
    "image": "./images/product-11.webp",
    "canvasImage": "./images/p04.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "186.00"
      }
    ],
    "summary": "Економічна каністра 5 л для HoReCa та інтенсивного клінінгу.",
    "purpose": "Професійне видалення запеченого жиру, нагару та кіптяви у закладах громадського харчування (HoReCa), пекарнях та харчовому виробництві.",
    "usage": "Нанести на поверхню на 5–10 хв, потерти губкою і змити водою. Для фритюрниць: розвести водою 1:1, 1:2 або 1:5, залити вище рівня олії (100–200 мл на 1 л води), витримати 1–2 години, злити та ретельно промити водою.",
    "composition": "Високолужний комплекс ПАР та розчинників нагару. Не використовувати на алюмінієвих, емальованих та лакофарбових поверхнях. Працювати в захисних рукавичках.",
    "description": "Спосіб застосування: перед застосуванням вміст пляшки збовтати, нанести на поверхню на 5-10 хв. Сильно забруднені місця протерти губкою. Змити водою. Ідеально підходить для миття застарілих залишків від смаження, випічки, видалення запеченого жиру, нагару, кіптяви. Для фритюрниць: залежно від ступеню та характеру забруднень розвести засіб водою 1:1, 1:2 або 1:5, налити розчин у фритюрницю (вище відмітки рівня олії), додати 100-200 мл засобу на кожен літр води, залишити на 1-2 години, після чого воду злити, поверхню очистити щіткою та ретельно промити проточною водою. Не застосовувати засіб для обробки алюмінієвих, емальованих, скляних та лакофарбових поверхонь! Під час роботи використовувати гумові рукавички."
  },
  {
    "id": "p05",
    "name": "Засіб для миття підлоги та інших поверхонь",
    "shortCategory": "Підлога та поверхні",
    "categoryKey": "floors",
    "formulaBadge": "Концентрат · Без розводів",
    "phLevel": "pH 8.0 (М'який лужний)",
    "b2bTag": "Універсальний 1Л",
    "image": "./images/product-16.webp",
    "canvasImage": "./images/p05.jpg",
    "sizes": [
      {
        "label": "1л",
        "price": "42.00"
      }
    ],
    "summary": "Миття підлоги й поверхонь без липкого шару.",
    "purpose": "Використовується для миття підлоги з лінолеуму, сильно забруднених поверхонь з мармуру (підлоги, стін, фасадів будівель), наливної підлоги, керамічної плитки, ламінату та ПВХ-покриттів.",
    "usage": "Для щоденного прибирання розвести 30–50 мл засобу на 5 л теплої води. Для сильних забруднень нанести робочий розчин губкою або мопом, витримати 3–5 хвилин і змити водою.",
    "composition": "Вода підготовлена, комплекс неіоногенних та аніонних ПАР, активні миючі добавки, парфумерна композиція. Не залишає липкого шару та розводів.",
    "description": "Використовується для миття підлоги з лінолеуму, сильно забруднених поверхонь з мармуру (підлоги, стін, фасадів будівель та ін.), наливної підлоги, керамічної плитки та інших поверхонь."
  },
  {
    "id": "p06",
    "name": "Засіб для миття підлоги та інших поверхонь (Каністра 5л)",
    "shortCategory": "Підлога та поверхні",
    "categoryKey": "floors",
    "formulaBadge": "Клінінг & Офіси · Каністра 5Л",
    "phLevel": "pH 8.0 (М'який лужний)",
    "b2bTag": "Економія B2B",
    "image": "./images/product-10.webp",
    "canvasImage": "./images/p06.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "143.50"
      }
    ],
    "summary": "Концентрат 5 л для великих площ і щоденного сервісу.",
    "purpose": "Призначений для ручного та механізованого миття великих площ підлоги з керамічної плитки, мармуру, граніту, лінолеуму та наливних промислових підлог.",
    "usage": "Розвести 30–60 мл концентрату на 5–10 л води залежно від рівня забруднення. Підходить для регулярного вологого прибирання без необхідності повторного змивання.",
    "composition": "Вода підготовлена, низькопінні ПАР, комплексоутворювачі, віддушка. Безпечний для більшості водостійких твердих покриттів.",
    "description": "Використовується для миття підлоги з лінолеуму, сильно забруднених поверхонь з мармуру (підлоги, стін, фасадів будівель та ін.), наливної підлоги, керамічної плитки та інших поверхонь."
  },
  {
    "id": "p07",
    "name": "Гель для миття та очищення унітазів, раковин, кахельних та керамічних поверхонь",
    "shortCategory": "Ванна та туалет",
    "categoryKey": "bath",
    "formulaBadge": "Густий WC-гель · Проти вапна та іржі",
    "phLevel": "pH 2.0 (Кислотний гель)",
    "b2bTag": "Топ продажів",
    "image": "./images/product-1.webp",
    "canvasImage": "./images/p07.jpg",
    "sizes": [
      {
        "label": "750 мл",
        "price": "35.00"
      }
    ],
    "summary": "Гель під обідок: наліт, іржа та бактерії в унітазі.",
    "purpose": "Чудово розчиняє вапняний наліт, сечовий камінь та іржу, руйнує складні біологічні та мінеральні забруднення на унітазах, раковинах, кахельних і керамічних поверхнях.",
    "usage": "Нанести гель на поверхню унітазу та під обідок, потерти щіткою і змити водою. У разі сильних вапняних відкладень залишити на 5–15 хвилин, потерти щіткою та змити водою.",
    "composition": "Вода підготовлена, комплекс неорганічних та органічних кислот, амфотерні ПАР, загусник, барвник, ароматизатор. Не змішувати з хлорвмісними засобами.",
    "description": "Чудово розчиняє вапняний наліт, сечовий камінь, іржу, руйнує складні забруднення. Використовується для швидкого та якісного чищення унітазів,раковин, кахельних та керамічних поверхонь."
  },
  {
    "id": "p08",
    "name": "Засіб для миття скла",
    "shortCategory": "Скло та дзеркала",
    "categoryKey": "glass",
    "formulaBadge": "З ізопропіловим спиртом · Блиск без смуг",
    "phLevel": "pH 9.0 (Слаболужний)",
    "b2bTag": "3 варіанти тари",
    "image": "./images/product-7.webp",
    "canvasImage": "./images/p08.jpg",
    "sizes": [
      {
        "label": "500мл (з розпилювачем)",
        "price": "31.80"
      },
      {
        "label": "500мл (без розпилювача)",
        "price": "25.80"
      },
      {
        "label": "5л",
        "price": "120.60"
      }
    ],
    "summary": "Скло й дзеркала без розводів, швидке висихання.",
    "purpose": "Призначений для ідеально чистого миття скла вікон і автомобілів, дзеркал, кришталю, фарфору, кахлю, зовнішніх панелей електроприладів та хромованих поверхонь без розводів.",
    "usage": "Нанести засіб за допомогою розпилювача на забруднену скляну поверхню з відстані 15–20 см і насухо витерти чистою серветкою з мікрофібри або паперовим рушником до блиску.",
    "composition": "Вода підготовлена > 30%, ізопропіловий спирт до 10%, розчин аміаку 0,5–1%, ПАР, віддушка, барвник < 0,2%. При замерзанні та подальшому розморожуванні повністю зберігає властивості.",
    "description": "Засіб призначений для миття скла вікон і автомобілів, дзеркал, кришталю, фарфору, кахлю, кераміки, зовнішніх панелей електроприладів, а також хромованих поверхонь. Спосіб вживання: нанести засіб за допомогою розпилювача на забруднену поверхню і витерти сухою ганчіркою або папером до блиску."
  },
  {
    "id": "p09",
    "name": "Засіб для миття посуду з запахом яблука",
    "shortCategory": "Посуд",
    "categoryKey": "dishes",
    "formulaBadge": "Густа піна · Аромат зеленого яблука",
    "phLevel": "pH 6.5 (Нейтральний)",
    "b2bTag": "Роздріб 500мл",
    "image": "./images/product-4.webp",
    "canvasImage": "./images/p09.jpg",
    "sizes": [
      {
        "label": "500мл",
        "price": "29.00"
      }
    ],
    "summary": "Миття посуду з ароматом яблука, стійка піна.",
    "purpose": "Призначений для щоденного ручного миття скляного, фарфорового, металевого та пластикового посуду, столових приборів і кухонного інвентарю.",
    "usage": "Нанести декілька крапель засобу на вологу губку або розчинити 1 чайну ложку в 3–5 л води, вимити посуд і ретельно сполоснути чистою проточною водою.",
    "composition": "Вода підготовлена, аніонні та амфотерні ПАР, хлорид натрію, гліцерин, парфумерна композиція «Яблуко», консервант, харчовий барвник. Повністю змивається водою.",
    "description": "Засіб для ручного миття посуду з приємним ароматом яблука. Добре піниться, ефективно видаляє жир і залишки їжі, легко змивається водою. Підходить для щоденного використання. Нанести декілька крапель на вологу губку, спінити та вимити посуд."
  },
  {
    "id": "p10",
    "name": "Засіб для миття посуду з запахом лимона",
    "shortCategory": "Посуд",
    "categoryKey": "dishes",
    "formulaBadge": "Проти жиру та запахів · Свіжий лимон",
    "phLevel": "pH 6.5 (Нейтральний)",
    "b2bTag": "Роздріб 500мл",
    "image": "./images/product-8.webp",
    "canvasImage": "./images/p10.jpg",
    "sizes": [
      {
        "label": "500мл",
        "price": "29.00"
      }
    ],
    "summary": "Миття посуду з ароматом лимона, ефективно знежирює.",
    "purpose": "Швидко розчиняє тваринні та рослинні жири на тарілках, каструлях, сковорідках і склянках, надаючи посуду кришталевого блиску та свіжості лимона.",
    "usage": "Нанести невелику кількість засобу на вологу губку або розвести у теплій воді, вимити посуд і ретельно промити чистою водою.",
    "composition": "Вода підготовлена, комплекс ПАР м'якої дії, загусник, гліцерин для захисту шкіри рук, ароматизатор «Лимон», консервант, барвник.",
    "description": "Засіб для ручного миття посуду з ароматом лимона. Ефективно розчиняє жир, надає свіжість, підходить для тарілок, каструль і кухонного приладдя. Нанести на вологу губку або розвести у воді, вимити посуд і ретельно сполоснути."
  },
  {
    "id": "p11",
    "name": "Засіб для миття посуду з запахом яблука (Каністра 5л)",
    "shortCategory": "Посуд",
    "categoryKey": "dishes",
    "formulaBadge": "HoReCa 5Л · Високе піноутворення",
    "phLevel": "pH 6.5 (Нейтральний)",
    "b2bTag": "Каністра 5Л",
    "image": "./images/product-9.webp",
    "canvasImage": "./images/p11.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "135.00"
      }
    ],
    "summary": "Каністра 5 л «яблуко» для кухні та харчоблоків.",
    "purpose": "Концентрований засіб для миття посуду у великій тарі 5 л. Забезпечує низьку собівартість миття в закладах HoReCa, харчоблоках та при заправці настільних дозаторів.",
    "usage": "Економна витрата: нанести декілька крапель на губку або приготувати робочий розчин (2–3 мл засобу на 1 л теплої води). Після миття ретельно сполоснути посуд водою.",
    "composition": "Вода підготовлена, аніонні та неіоногенні ПАР, стабілізатор піни, гліцерин, ароматизатор «Яблуко», консервант. Зберігати щільно закритим.",
    "description": "Концентрований засіб для миття посуду з запахом яблука у великій тарі 5 л – зручно для закладів харчування та інтенсивного використання. Економна витрата: невелику кількість засобу розчинити у воді або нанести на губку. Після миття ретельно промити посуд водою."
  },
  {
    "id": "p12",
    "name": "Засіб для миття посуду з запахом лимона (Каністра 5л)",
    "shortCategory": "Посуд",
    "categoryKey": "dishes",
    "formulaBadge": "HoReCa 5Л · Максимальна вигода",
    "phLevel": "pH 6.5 (Нейтральний)",
    "b2bTag": "Каністра 5Л",
    "image": "./images/product-12.webp",
    "canvasImage": "./images/p12.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "135.00"
      }
    ],
    "summary": "Каністра 5 л «лимон» для інтенсивного миття посуду.",
    "purpose": "Ідеальний вибір для професійних кухонь, кафе, готелів, офісів та оптових закупівель. Легко справляється з великими обсягами жирного посуду.",
    "usage": "Використовувати для заправки диспенсерів по 500 мл або розводити у мийних ваннах (2–4 мл на 1 л води). Ретельно промити посуд проточною водою.",
    "composition": "Вода підготовлена, біорозкладні ПАР, хлорид натрію, пом'якшувальні компоненти для шкіри рук, парфумерна композиція «Лимон».",
    "description": "Концентрований засіб для миття посуду з ароматом лимона у тарі 5 л. Добре справляється із жирними забрудненнями, підходить для професійного та домашнього використання. Розчинити у воді або нанести на губку, вимити посуд і промити. Зберігати щільно закритим."
  },
  {
    "id": "p13",
    "name": "Мило рідке «Морська свіжість»",
    "shortCategory": "Рідке мило",
    "categoryKey": "soap",
    "formulaBadge": "Для дозаторів та диспенсерів · рН-баланс",
    "phLevel": "pH 5.5 (Делікатний)",
    "b2bTag": "Каністра 5Л",
    "image": "./images/product-13.webp",
    "canvasImage": "./images/p13.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "158.00"
      }
    ],
    "summary": "Рідке мило «Морська свіжість» для рук щодня.",
    "purpose": "Призначене для щоденного гігієнічного миття рук персоналу та відвідувачів у бізнес-центрах, закладах HoReCa, школах, медичних і санаторних установах та вдома.",
    "usage": "Залити мило у диспенсер або флакон з помпою-дозатором. Нанести невелику кількість (1–2 натискання) на вологі руки, спінити протягом 20–30 секунд і змити водою.",
    "composition": "Вода підготовлена, м'які ПАР, гліцерин, кокамідопропілбетаїн, доглядові компоненти, парфумерна композиція «Морська свіжість». Не пересушує шкіру.",
    "description": "Рідке мило «Морська свіжість» для миття рук. Ніжно очищує шкіру, має свіжий аромат, підходить для дозаторів і щоденного використання вдома чи на роботі. Нанести невелику кількість на вологі руки, спінити і змити водою."
  },
  {
    "id": "p14",
    "name": "Мило рідке «Жожоба»",
    "shortCategory": "Рідке мило",
    "categoryKey": "soap",
    "formulaBadge": "З екстрактом жожоба · Зволоження шкіри",
    "phLevel": "pH 5.5 (Делікатний)",
    "b2bTag": "Каністра 5Л",
    "image": "./images/product-14.webp",
    "canvasImage": "./images/p14.jpg",
    "sizes": [
      {
        "label": "5л",
        "price": "158.00"
      }
    ],
    "summary": "Рідке мило «Жожоба» з м’яким доглядом за шкірою.",
    "purpose": "Розроблене для частого миття рук вдома, на підприємствах, у закладах харчування, дитячих і лікувально-профілактичних установах.",
    "usage": "Використовувати у наливних дозаторах будь-якого типу. Нанести 2–3 мл мила на вологу шкіру рук, спінити та ретельно змити проточною водою.",
    "composition": "Вода підготовлена, амфотерні та неіоногенні ПАР, гліцерин, екстракт жожоба, лимонна кислота (регулятор pH 5.5), парфумерна композиція.",
    "description": "Рідке мило з екстрактом жожоба для догляду за руками. М’яко очищує, допомагає зменшити відчуття сухості після миття, має приємний аромат. Нанести на вологі руки, спінити і ретельно змити водою. Для зовнішнього застосування."
  }
];

      function safeGetLocal(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
      }
      function safeSetLocal(key, val) {
        try { localStorage.setItem(key, val); } catch (e) {}
      }
      function safeRemoveLocal(key) {
        try { localStorage.removeItem(key); } catch (e) {}
      }
      function safeGetSession(key) {
        try { return sessionStorage.getItem(key); } catch (e) { return null; }
      }
      function safeSetSession(key, val) {
        try { sessionStorage.setItem(key, val); } catch (e) {}
      }
      function safeRemoveSession(key) {
        try { sessionStorage.removeItem(key); } catch (e) {}
      }

      function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
      }

      function escapeHtml(str) {
        return String(str == null ? '' : str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      let products = loadInitialProducts();
      let selectedSizeIndexByProduct = {};
      let openAccordionsByProduct = {};
      let activeCategory = 'all';
      let activeVolumeFilter = 'all';
      let searchQuery = '';
      let sortMode = 'default';
      let priceMode = 'retail';
      let editorUnlocked = safeGetSession(SESSION_UNLOCK_KEY) === '1';
      let allAccordionsExpanded = false;
      let quoteCart = [];
      let editorWorkingCopy = null;

      function loadInitialProducts() {
        const raw = safeGetLocal(STORAGE_KEY);
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
              const byId = {};
              parsed.forEach(item => { byId[item.id] = item; });
              return BASELINE_PRODUCTS.map(base => {
                const saved = byId[base.id];
                if (!saved) return deepClone(base);
                return Object.assign({}, deepClone(base), {
                  name: saved.name || base.name,
                  sizes: Array.isArray(saved.sizes) && saved.sizes.length ? saved.sizes : deepClone(base.sizes),
                  description: saved.description || base.description
                });
              });
            }
          } catch (e) {}
        }
        return deepClone(BASELINE_PRODUCTS);
      }

      function hasSavedDraft() {
        return !!safeGetLocal(STORAGE_KEY);
      }

      function parseLiters(label) {
        if (!label) return null;
        const s = String(label).toLowerCase().replace(',', '.');
        const mlMatch = s.match(/(\d+(?:\.\d+)?)\s*мл/);
        if (mlMatch) return parseFloat(mlMatch[1]) / 1000;
        const lMatch = s.match(/(\d+(?:\.\d+)?)\s*л/);
        if (lMatch) return parseFloat(lMatch[1]);
        return null;
      }

      function getEffectivePrice(rawPrice) {
        const num = parseFloat(rawPrice);
        if (!isFinite(num)) return 0;
        return priceMode === 'b2b' ? +(num * 0.88).toFixed(2) : num;
      }

      function showToast(msg) {
        const toast = document.getElementById('pif-toast');
        const text = document.getElementById('pif-toast-text');
        if (!toast || !text) return;
        text.textContent = msg;
        toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
        toast.classList.add('opacity-100', 'translate-y-0');
        if (window._pifToastTimer) clearTimeout(window._pifToastTimer);
        window._pifToastTimer = setTimeout(() => {
          toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
          toast.classList.remove('opacity-100', 'translate-y-0');
        }, 3200);
      }

      function updateDraftPill() {
        const pill = document.getElementById('draft-status-pill');
        const banner = document.getElementById('inline-editor-banner');
        const topLabel = document.getElementById('top-price-editor-label');
        if (pill) {
          if (hasSavedDraft()) {
            pill.classList.remove('hidden');
            pill.classList.add('inline-flex');
          } else {
            pill.classList.add('hidden');
            pill.classList.remove('inline-flex');
          }
        }
        if (banner) {
          if (editorUnlocked) {
            banner.classList.remove('hidden');
          } else {
            banner.classList.add('hidden');
          }
        }
        if (topLabel) {
          topLabel.textContent = editorUnlocked ? 'Редактор цін (Активний)' : 'Редактор цін';
        }
      }

      function getFilteredProducts() {
        return products.filter(p => {
          if (activeCategory !== 'all' && p.categoryKey !== activeCategory) return false;
          if (activeVolumeFilter === 'retail') {
            const hasRetail = (p.sizes || []).some(sz => {
              const l = parseLiters(sz.label);
              return l !== null && l <= 1.5;
            });
            if (!hasRetail) return false;
          } else if (activeVolumeFilter === '5l') {
            const has5L = (p.sizes || []).some(sz => {
              const l = parseLiters(sz.label);
              return l !== null && l >= 4.5;
            });
            if (!has5L) return false;
          }
          if (searchQuery.trim() !== '') {
            const q = searchQuery.trim().toLowerCase();
            const hay = [
              p.id, p.name, p.shortCategory, p.formulaBadge, p.summary, p.purpose, p.usage, p.composition,
              ...(p.sizes || []).map(s => s.label)
            ].join(' ').toLowerCase();
            if (!hay.includes(q)) return false;
          }
          return true;
        }).sort((a, b) => {
          if (sortMode === 'price-asc') {
            const pa = Math.min(...(a.sizes || []).map(s => parseFloat(s.price) || 99999));
            const pb = Math.min(...(b.sizes || []).map(s => parseFloat(s.price) || 99999));
            return pa - pb;
          }
          if (sortMode === 'price-desc') {
            const pa = Math.min(...(a.sizes || []).map(s => parseFloat(s.price) || 0));
            const pb = Math.min(...(b.sizes || []).map(s => parseFloat(s.price) || 0));
            return pb - pa;
          }
          if (sortMode === 'name-asc') {
            return a.name.localeCompare(b.name, 'uk');
          }
          return a.id.localeCompare(b.id);
        });
      }

      function renderCatalog() {
        const grid = document.getElementById('products-grid');
        const emptyState = document.getElementById('catalog-empty-state');
        const countEl = document.getElementById('visible-products-count');
        const resetBtn = document.getElementById('reset-catalog-filters-btn');
        if (!grid) return;

        const filtered = getFilteredProducts();
        if (countEl) countEl.textContent = String(filtered.length);

        if (resetBtn) {
          if (activeCategory !== 'all' || activeVolumeFilter !== 'all' || searchQuery.trim() !== '' || sortMode !== 'default') {
            resetBtn.classList.remove('hidden');
          } else {
            resetBtn.classList.add('hidden');
          }
        }

        if (filtered.length === 0) {
          grid.innerHTML = '';
          if (emptyState) emptyState.classList.remove('hidden');
          return;
        }
        if (emptyState) emptyState.classList.add('hidden');

        grid.innerHTML = filtered.map(p => {
          const sizes = p.sizes && p.sizes.length ? p.sizes : [{ label: 'Стандарт', price: '0.00' }];
          let selIdx = selectedSizeIndexByProduct[p.id] || 0;
          if (selIdx >= sizes.length) selIdx = 0;

          if (activeVolumeFilter === '5l' && selectedSizeIndexByProduct[p.id] === undefined) {
            const idx5 = sizes.findIndex(s => (parseLiters(s.label) || 0) >= 4.5);
            if (idx5 !== -1) selIdx = idx5;
          }

          const currentSize = sizes[selIdx];
          const effPrice = getEffectivePrice(currentSize.price);
          const liters = parseLiters(currentSize.label);
          const perLiterText = (liters && liters > 0)
            ? (effPrice / liters).toFixed(2) + ' грн / 1 л'
            : 'Пряма ціна виробника';

          const allSizesSummary = sizes.map(s => {
            const ep = getEffectivePrice(s.price).toFixed(2);
            return escapeHtml(s.label) + ': ' + ep + ' грн';
          }).join(' · ');

          const sizePillsHtml = sizes.map((s, idx) => {
            const isSel = idx === selIdx;
            return `<button type="button" data-action="select-size" data-pid="${escapeHtml(p.id)}" data-sidx="${idx}" class="size-pill cursor-pointer ${isSel ? 'is-active' : 'hover:border-pif-300 hover:text-pif-800'}">${escapeHtml(s.label)}</button>`;
          }).join('');

          let inlineEditHtml = '';
          if (editorUnlocked) {
            const rows = sizes.map((s, idx) => `
              <div class="flex items-center gap-1.5 mt-1.5">
                <input type="text" data-inline-label="${escapeHtml(p.id)}" data-sidx="${idx}" value="${escapeHtml(s.label)}" class="w-28 px-2 py-1 rounded bg-white border border-pif-300 text-[11px] font-medium text-slate-800" />
                <input type="number" step="0.10" data-inline-price="${escapeHtml(p.id)}" data-sidx="${idx}" value="${escapeHtml(s.price)}" class="w-20 px-2 py-1 rounded bg-white border border-pif-300 text-xs font-bold text-pif-900 tabular-nums" />
                <span class="text-[11px] text-slate-500">грн</span>
              </div>
            `).join('');
            inlineEditHtml = `
              <div class="mt-3 p-2.5 rounded-xl bg-pif-50/90 border border-pif-200">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold text-pif-900"><i class="fa-solid fa-pen-to-square mr-1"></i>Швидка зміна ціни (${escapeHtml(p.id)}):</span>
                  <button type="button" data-action="save-inline-card" data-pid="${escapeHtml(p.id)}" class="px-2 py-0.5 rounded bg-pif-700 hover:bg-pif-800 text-white text-[11px] font-bold cursor-pointer">Зберегти</button>
                </div>
                ${rows}
              </div>
            `;
          }

          const accPurposeKey = p.id + ':purpose';
          const accUsageKey = p.id + ':usage';
          const accCompKey = p.id + ':comp';

          const isPurposeOpen = !!openAccordionsByProduct[accPurposeKey];
          const isUsageOpen = !!openAccordionsByProduct[accUsageKey];
          const isCompOpen = !!openAccordionsByProduct[accCompKey];

          const waText = encodeURIComponent(
            `Вітаю! Хочу замовити продукцію ТМ «ПІФ»:
• ${p.name} (${currentSize.label}) — ${effPrice.toFixed(2)} грн.`
          );

          return `
            <article class="bg-white rounded-2xl border border-slate-200/90 product-card-shadow flex flex-col overflow-hidden" data-product-id="${escapeHtml(p.id)}">
              <div class="px-4 pt-3.5 pb-2 flex items-center justify-between gap-2 border-b border-slate-100">
                <div class="flex items-center gap-1.5">
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">${escapeHtml(p.id)}</span>
                  <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pif-50 text-pif-800 border border-pif-200/60">${escapeHtml(p.shortCategory)}</span>
                </div>
                <span class="text-[11px] font-medium text-slate-500">${escapeHtml(p.phLevel)}</span>
              </div>

              <div class="relative product-img-well aspect-[4/5] sm:aspect-square border-b border-slate-100 group overflow-hidden">
                <img
                  src="${escapeHtml(p.image || p.canvasImage)}"
                  alt="${escapeHtml(p.name)}"
                  loading="lazy"
                  decoding="async"
                  onerror="this.onerror=null;this.src='${escapeHtml(p.canvasImage || p.image)}';"
                  class="transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span class="absolute bottom-2.5 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1c2430]/80 text-white">
                  ${escapeHtml(p.b2bTag)}
                </span>
              </div>

              <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div class="text-[11px] font-bold text-pif-700 mb-1">${escapeHtml(p.formulaBadge)}</div>
                  <h3 class="text-base font-extrabold text-slate-900 leading-snug line-clamp-2 min-h-[2.75rem]">
                    ${escapeHtml(p.name)}
                  </h3>
                  <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    ${escapeHtml(p.summary)}
                  </p>

                  <div class="mt-3.5 pt-3 border-t border-slate-100">
                    <div class="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1.5">
                      <span>Оберіть фасування:</span>
                      <span class="text-pif-700 tabular-nums">${escapeHtml(perLiterText)}</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5">
                      ${sizePillsHtml}
                    </div>
                  </div>

                  <div class="mt-3.5 bg-[#f4f7fa] rounded-xl p-3 border border-slate-200/80">
                    <div class="flex items-baseline justify-between gap-2">
                      <div>
                        <span class="text-xs text-slate-500 font-medium">Ціна (${escapeHtml(currentSize.label)}):</span>
                        <div class="text-xl sm:text-2xl font-extrabold text-[#339af0] tabular-nums leading-tight mt-0.5">
                          ${effPrice.toFixed(2)} <span class="text-sm font-bold text-slate-600">грн</span>
                        </div>
                      </div>
                      ${
                        priceMode === 'b2b'
                          ? `<span class="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Опт -12%</span>`
                          : `<span class="text-[11px] font-semibold text-slate-500">В наявності</span>`
                      }
                    </div>
                    <div class="text-[11px] text-slate-500 mt-1 pt-1 border-t border-slate-200/70 tabular-nums">
                      Усі ціни: ${allSizesSummary}
                    </div>
                  </div>

                  ${inlineEditHtml}

                  <div class="mt-3.5 border border-slate-200 rounded-xl divide-y divide-slate-200 overflow-hidden bg-white">
                    <div>
                      <button type="button" data-action="toggle-acc" data-acc-key="${escapeHtml(accPurposeKey)}" class="w-full px-3 py-2 text-left text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-pif-600"></i> Призначення та дія</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform ${isPurposeOpen ? 'rotate-180 text-pif-700' : ''}"></i>
                      </button>
                      <div class="accordion-content px-3 text-xs text-slate-600 leading-relaxed bg-slate-50/70 ${isPurposeOpen ? 'open py-2.5 border-t border-slate-100' : ''}">
                        ${escapeHtml(p.purpose)}
                      </div>
                    </div>

                    <div>
                      <button type="button" data-action="toggle-acc" data-acc-key="${escapeHtml(accUsageKey)}" class="w-full px-3 py-2 text-left text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-spray-can-sparkles text-pif-600"></i> Спосіб застосування</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform ${isUsageOpen ? 'rotate-180 text-pif-700' : ''}"></i>
                      </button>
                      <div class="accordion-content px-3 text-xs text-slate-600 leading-relaxed bg-slate-50/70 ${isUsageOpen ? 'open py-2.5 border-t border-slate-100' : ''}">
                        ${escapeHtml(p.usage)}
                      </div>
                    </div>

                    <div>
                      <button type="button" data-action="toggle-acc" data-acc-key="${escapeHtml(accCompKey)}" class="w-full px-3 py-2 text-left text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-flask text-pif-600"></i> Склад та безпека</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform ${isCompOpen ? 'rotate-180 text-pif-700' : ''}"></i>
                      </button>
                      <div class="accordion-content px-3 text-xs text-slate-600 leading-relaxed bg-slate-50/70 ${isCompOpen ? 'open py-2.5 border-t border-slate-100' : ''}">
                        ${escapeHtml(p.composition)}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    data-action="add-to-quote"
                    data-pid="${escapeHtml(p.id)}"
                    data-sidx="${selIdx}"
                    class="flex-1 py-2.5 px-3 rounded-xl bg-[#339af0] hover:bg-[#1c7ed6] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <i class="fa-solid fa-plus"></i> До заявки
                  </button>
                  <a
                    href="https://api.whatsapp.com/send?phone=380679720560&text=${waText}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    title="Замовити цей товар у WhatsApp"
                  >
                    <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> Замовити
                  </a>
                </div>
              </div>
            </article>
          `;
        }).join('');
      }

      function renderQuoteCart() {
        const listEl = document.getElementById('quote-items-list');
        const badgeEl = document.getElementById('quote-count-badge');
        const totalEl = document.getElementById('quote-total-price');
        if (!listEl) return;

        const totalQty = quoteCart.reduce((acc, item) => acc + item.qty, 0);
        const totalPrice = quoteCart.reduce((acc, item) => acc + item.unitPrice * item.qty, 0);

        if (badgeEl) badgeEl.textContent = String(totalQty);
        if (totalEl) totalEl.textContent = totalPrice.toFixed(2) + ' грн';

        if (quoteCart.length === 0) {
          listEl.innerHTML = `
            <div class="text-center py-12 px-4 text-slate-400">
              <i class="fa-solid fa-basket-shopping text-3xl mb-2"></i>
              <p class="text-sm font-bold text-slate-600">Ваша заявка порожня</p>
              <p class="text-xs text-slate-500 mt-1">Натисніть «+ До заявки» на будь-якому товарі в каталозі, щоб сформувати список для замовлення.</p>
            </div>
          `;
          return;
        }

        listEl.innerHTML = quoteCart.map((item, idx) => `
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
            <div class="min-w-0 flex-1">
              <div class="text-xs font-bold text-slate-900 truncate">${escapeHtml(item.name)}</div>
              <div class="text-[11px] text-slate-500 mt-0.5">Фасування: <strong class="text-slate-700">${escapeHtml(item.sizeLabel)}</strong> · ${item.unitPrice.toFixed(2)} грн/шт</div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button type="button" data-quote-dec="${idx}" class="w-6 h-6 rounded bg-white border border-slate-300 text-xs font-bold cursor-pointer">-</button>
              <span class="w-6 text-center text-xs font-bold tabular-nums">${item.qty}</span>
              <button type="button" data-quote-inc="${idx}" class="w-6 h-6 rounded bg-white border border-slate-300 text-xs font-bold cursor-pointer">+</button>
              <button type="button" data-quote-del="${idx}" class="ml-1 text-slate-400 hover:text-rose-600 p-1 cursor-pointer"><i class="fa-solid fa-trash-can text-xs"></i></button>
            </div>
          </div>
        `).join('');
      }

      function addToQuote(pid, sidx) {
        const prod = products.find(p => p.id === pid);
        if (!prod || !prod.sizes || !prod.sizes[sidx]) return;
        const sz = prod.sizes[sidx];
        const unitPrice = getEffectivePrice(sz.price);
        const existing = quoteCart.find(item => item.id === pid && item.sizeLabel === sz.label);
        if (existing) {
          existing.qty += 1;
          existing.unitPrice = unitPrice;
        } else {
          quoteCart.push({
            id: pid,
            name: prod.name,
            sizeLabel: sz.label,
            unitPrice: unitPrice,
            qty: 1
          });
        }
        renderQuoteCart();
        showToast(`Додано до заявки: ${prod.name} (${sz.label})`);
      }

      function updateB2BCalculator() {
        const selEl = document.getElementById('calc-product-select');
        const sliderEl = document.getElementById('calc-liters-slider');
        if (!selEl || !sliderEl) return;

        const key = selEl.value;
        const liters = parseInt(sliderEl.value, 10) || 20;
        const canisters = Math.round(liters / 5);

        document.getElementById('calc-liters-label').textContent = String(liters);
        document.getElementById('calc-canisters-label').textContent = String(canisters);

        let smallPerLiter = 63.60;
        let bulkPerLiter = 24.12;

        if (key === 'glass') {
          const p08 = products.find(p => p.id === 'p08');
          const s500 = p08 && p08.sizes[0] ? parseFloat(p08.sizes[0].price) : 31.80;
          const s5l = p08 && p08.sizes[2] ? parseFloat(p08.sizes[2].price) : 120.60;
          smallPerLiter = s500 * 2;
          bulkPerLiter = s5l / 5;
        } else if (key === 'dish') {
          const p09 = products.find(p => p.id === 'p09');
          const p11 = products.find(p => p.id === 'p11');
          const s500 = p09 && p09.sizes[0] ? parseFloat(p09.sizes[0].price) : 29.00;
          const s5l = p11 && p11.sizes[0] ? parseFloat(p11.sizes[0].price) : 135.00;
          smallPerLiter = s500 * 2;
          bulkPerLiter = s5l / 5;
        } else if (key === 'bath') {
          const p01 = products.find(p => p.id === 'p01');
          const s500 = p01 && p01.sizes[0] ? parseFloat(p01.sizes[0].price) : 34.00;
          const s5l = p01 && p01.sizes[1] ? parseFloat(p01.sizes[1].price) : 198.00;
          smallPerLiter = s500 * 2;
          bulkPerLiter = s5l / 5;
        } else if (key === 'pipes') {
          const p02 = products.find(p => p.id === 'p02');
          const s1l = p02 && p02.sizes[0] ? parseFloat(p02.sizes[0].price) : 44.50;
          const s5l = p02 && p02.sizes[1] ? parseFloat(p02.sizes[1].price) : 143.50;
          smallPerLiter = s1l;
          bulkPerLiter = s5l / 5;
        }

        const smallTotal = liters * smallPerLiter;
        const bulkTotal = liters * bulkPerLiter;
        const annualSavings = Math.max(0, (smallTotal - bulkTotal) * 12);

        document.getElementById('calc-small-cost').textContent = smallTotal.toFixed(2) + ' грн';
        document.getElementById('calc-small-per-l').textContent = smallPerLiter.toFixed(2) + ' грн / літр';
        document.getElementById('calc-bulk-cost').textContent = bulkTotal.toFixed(2) + ' грн';
        document.getElementById('calc-bulk-per-l').textContent = bulkPerLiter.toFixed(2) + ' грн / літр';
        document.getElementById('calc-annual-savings').textContent = Math.round(annualSavings).toLocaleString('uk-UA') + ' грн';
      }

      function getCleanProductsJsonArray(sourceArray) {
        return (sourceArray || products).map(p => ({
          id: p.id,
          name: p.name,
          image: p.image,
          sizes: (p.sizes || []).map(s => ({
            label: String(s.label || '').trim(),
            price: Number(parseFloat(s.price) || 0).toFixed(2)
          })),
          description: p.description
        }));
      }

      function downloadJsonFile(sourceArray) {
        const clean = getCleanProductsJsonArray(sourceArray);
        const jsonStr = JSON.stringify(clean, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'products.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Файл products.json завантажено!');
      }

      function copyJsonToClipboard(sourceArray) {
        const clean = getCleanProductsJsonArray(sourceArray);
        const jsonStr = JSON.stringify(clean, null, 2);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(jsonStr).then(() => {
            showToast('JSON скопійовано в буфер обміну!');
          }).catch(() => {
            fallbackCopy(jsonStr);
          });
        } else {
          fallbackCopy(jsonStr);
        }
      }

      function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showToast('JSON скопійовано в буфер обміну!');
        } catch (e) {
          showToast('Не вдалося скопіювати автоматично.');
        }
        document.body.removeChild(ta);
      }

      function downloadCsvPriceList() {
        const rows = [
          ['Код SKU', 'Категорія', 'Назва продукту ТМ ПІФ', 'Фасування', 'Роздрібна ціна (грн)', 'Оптова ціна B2B -12% (грн)', 'Рівень pH']
        ];
        products.forEach(p => {
          (p.sizes || []).forEach(s => {
            const rp = parseFloat(s.price) || 0;
            const bp = +(rp * 0.88).toFixed(2);
            rows.push([
              p.id,
              p.shortCategory,
              '"' + String(p.name).replace(/"/g, '""') + '"',
              '"' + String(s.label).replace(/"/g, '""') + '"',
              rp.toFixed(2),
              bp.toFixed(2),
              p.phLevel
            ]);
          });
        });
        const csvContent = '﻿' + rows.map(r => r.join(';')).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pif-pricelist-2026.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Прайс-лист pif-pricelist-2026.csv завантажено!');
      }

      function openPriceEditorOrGate() {
        if (editorUnlocked) {
          openPriceEditorDrawer();
        } else {
          const gate = document.getElementById('price-editor-gate');
          if (gate) gate.classList.remove('hidden');
        }
      }

      function unlockEditorAndOpen(openDrawerNow) {
        editorUnlocked = true;
        safeSetSession(SESSION_UNLOCK_KEY, '1');
        const gate = document.getElementById('price-editor-gate');
        if (gate) gate.classList.add('hidden');
        updateDraftPill();
        renderCatalog();
        if (openDrawerNow) {
          openPriceEditorDrawer();
        } else {
          showToast('Режим редагування цін увімкнено!');
        }
      }

      function openPriceEditorDrawer() {
        editorWorkingCopy = deepClone(products);
        renderEditorDrawerList();
        syncRawJsonTextarea();
        const drawer = document.getElementById('price-editor');
        const backdrop = document.getElementById('price-editor-backdrop');
        if (drawer) drawer.classList.remove('hidden');
        if (backdrop) backdrop.classList.remove('hidden');
      }

      function closePriceEditorDrawer() {
        const drawer = document.getElementById('price-editor');
        const backdrop = document.getElementById('price-editor-backdrop');
        if (drawer) drawer.classList.add('hidden');
        if (backdrop) backdrop.classList.add('hidden');
      }

      function renderEditorDrawerList() {
        const listEl = document.getElementById('price-editor-list');
        if (!listEl || !editorWorkingCopy) return;

        listEl.innerHTML = editorWorkingCopy.map((prod, pIdx) => {
          const sizesRows = (prod.sizes || []).map((sz, sIdx) => `
            <div class="flex items-center gap-2 mt-2 editor-size-row" data-pidx="${pIdx}" data-sidx="${sIdx}">
              <span class="text-[11px] font-semibold text-slate-400 w-16 shrink-0">Варіант ${sIdx + 1}:</span>
              <input
                type="text"
                data-ed-label="${pIdx}:${sIdx}"
                value="${escapeHtml(sz.label)}"
                placeholder="Фасування (напр. 500мл, 5л)"
                class="flex-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-pif-600"
              />
              <div class="relative w-32 shrink-0">
                <input
                  type="number"
                  step="0.10"
                  data-ed-price="${pIdx}:${sIdx}"
                  value="${escapeHtml(sz.price)}"
                  placeholder="Ціна"
                  class="w-full pl-3 pr-10 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-extrabold text-slate-900 tabular-nums focus:outline-none focus:border-pif-600"
                />
                <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 font-semibold">грн</span>
              </div>
              <button
                type="button"
                data-ed-del-size="${pIdx}:${sIdx}"
                class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs cursor-pointer"
                title="Видалити фасування"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          `).join('');

          return `
            <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
              <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div class="flex items-center gap-2 flex-1">
                  <span class="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-xs font-bold">${escapeHtml(prod.id)}</span>
                  <input
                    type="text"
                    data-ed-prod-name="${pIdx}"
                    value="${escapeHtml(prod.name)}"
                    class="w-full px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-white focus:bg-white border border-transparent focus:border-slate-300 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none"
                  />
                </div>
                <span class="text-[11px] font-semibold text-pif-700 bg-pif-50 px-2 py-0.5 rounded shrink-0">${escapeHtml(prod.shortCategory)}</span>
              </div>
              <div class="pt-1">
                ${sizesRows}
              </div>
              <div class="mt-2.5 pt-2 border-t border-slate-100 flex justify-between items-center">
                <button
                  type="button"
                  data-ed-add-size="${pIdx}"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  <i class="fa-solid fa-plus text-[10px]"></i> Додати фасування / ціну
                </button>
                <span class="text-[11px] text-slate-400 font-mono">${escapeHtml(prod.image)}</span>
              </div>
            </div>
          `;
        }).join('');
      }

      function syncWorkingCopyFromInputs() {
        if (!editorWorkingCopy) return;
        const listEl = document.getElementById('price-editor-list');
        if (!listEl) return;

        editorWorkingCopy.forEach((prod, pIdx) => {
          const nameInput = listEl.querySelector(`[data-ed-prod-name="${pIdx}"]`);
          if (nameInput) prod.name = nameInput.value.trim() || prod.name;

          (prod.sizes || []).forEach((sz, sIdx) => {
            const lblInput = listEl.querySelector(`[data-ed-label="${pIdx}:${sIdx}"]`);
            const prInput = listEl.querySelector(`[data-ed-price="${pIdx}:${sIdx}"]`);
            if (lblInput) sz.label = lblInput.value.trim() || 'Стандарт';
            if (prInput) {
              const val = parseFloat(prInput.value);
              sz.price = isFinite(val) ? val.toFixed(2) : '0.00';
            }
          });
        });
      }

      function syncRawJsonTextarea() {
        const ta = document.getElementById('raw-json-textarea');
        if (!ta || !editorWorkingCopy) return;
        const clean = getCleanProductsJsonArray(editorWorkingCopy);
        ta.value = JSON.stringify(clean, null, 2);
      }

      function applyBulkPercentageToProducts(targetArray, pct) {
        if (!isFinite(pct) || pct === 0) return;
        const factor = 1 + pct / 100;
        targetArray.forEach(p => {
          (p.sizes || []).forEach(sz => {
            const cur = parseFloat(sz.price) || 0;
            const updated = Math.round(cur * factor * 10) / 10;
            sz.price = updated.toFixed(2);
          });
        });
      }

      function saveAndApplyProducts(newProductsArray, toastMessage) {
        products = deepClone(newProductsArray);
        safeSetLocal(STORAGE_KEY, JSON.stringify(getCleanProductsJsonArray(products)));
        updateDraftPill();
        renderCatalog();
        updateB2BCalculator();
        showToast(toastMessage || 'Ціни збережено та оновлено на сайті!');
      }

      document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const hash = window.location.hash || '';
        if (params.has('edit') || params.has('editprices') || hash.includes('edit')) {
          editorUnlocked = true;
          safeSetSession(SESSION_UNLOCK_KEY, '1');
        }

        updateDraftPill();
        renderCatalog();
        renderQuoteCart();
        updateB2BCalculator();

        const mobBtn = document.getElementById('mobile-menu-btn');
        const mobPanel = document.getElementById('mobile-menu-panel');
        if (mobBtn && mobPanel) {
          mobBtn.addEventListener('click', () => {
            mobPanel.classList.toggle('hidden');
          });
          mobPanel.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => mobPanel.classList.add('hidden'));
          });
        }

        const setPriceMode = (mode) => {
          priceMode = mode;
          const rBtn = document.getElementById('mode-retail-btn');
          const bBtn = document.getElementById('mode-b2b-btn');
          const mrBtn = document.getElementById('mob-mode-retail-btn');
          const mbBtn = document.getElementById('mob-mode-b2b-btn');
          const ind = document.getElementById('price-mode-indicator');

          if (mode === 'b2b') {
            if (rBtn) rBtn.className = 'px-2.5 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition-all cursor-pointer';
            if (bBtn) bBtn.className = 'px-2.5 py-1.5 rounded-md bg-[#339af0] text-white shadow-sm transition-all cursor-pointer';
            if (mrBtn) mrBtn.className = 'px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-300 text-xs font-semibold';
            if (mbBtn) mbBtn.className = 'px-2.5 py-1 rounded bg-pif-700 text-white text-xs font-semibold';
            if (ind) {
              ind.textContent = 'Оптовий прайс B2B (-12%)';
              ind.className = 'ml-2 inline-flex items-center px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold';
            }
            showToast('Увімкнено оптові ціни B2B (-12%)');
          } else {
            if (rBtn) rBtn.className = 'px-2.5 py-1.5 rounded-md bg-white text-slate-900 shadow-sm transition-all cursor-pointer';
            if (bBtn) bBtn.className = 'px-2.5 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition-all cursor-pointer';
            if (mrBtn) mrBtn.className = 'px-2.5 py-1 rounded bg-pif-700 text-white text-xs font-semibold';
            if (mbBtn) mbBtn.className = 'px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-300 text-xs font-semibold';
            if (ind) {
              ind.textContent = 'Роздрібний прайс';
              ind.className = 'ml-2 inline-flex items-center px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 font-semibold';
            }
            showToast('Увімкнено роздрібні ціни');
          }
          renderCatalog();
        };

        document.getElementById('mode-retail-btn')?.addEventListener('click', () => setPriceMode('retail'));
        document.getElementById('mode-b2b-btn')?.addEventListener('click', () => setPriceMode('b2b'));
        document.getElementById('mob-mode-retail-btn')?.addEventListener('click', () => setPriceMode('retail'));
        document.getElementById('mob-mode-b2b-btn')?.addEventListener('click', () => setPriceMode('b2b'));

        document.querySelectorAll('.cat-pill').forEach(btn => {
          btn.addEventListener('click', () => {
            activeCategory = btn.getAttribute('data-cat') || 'all';
            document.querySelectorAll('.cat-pill').forEach(b => {
              const isAct = b.getAttribute('data-cat') === activeCategory;
              b.className = isAct
                ? 'cat-pill active shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#339af0] text-white shadow-sm transition-all cursor-pointer'
                : 'cat-pill shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-all cursor-pointer';
            });
            renderCatalog();
          });
        });

        document.querySelectorAll('.footer-cat-link').forEach(btn => {
          btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-footer-cat') || 'all';
            const targetPill = document.querySelector(`.cat-pill[data-cat="${cat}"]`);
            if (targetPill) targetPill.click();
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
          });
        });

        document.querySelectorAll('.vol-pill').forEach(btn => {
          btn.addEventListener('click', () => {
            activeVolumeFilter = btn.getAttribute('data-vol') || 'all';
            document.querySelectorAll('.vol-pill').forEach(b => {
              const isAct = b.getAttribute('data-vol') === activeVolumeFilter;
              b.className = isAct
                ? 'vol-pill flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold bg-white text-slate-900 shadow-sm transition-all cursor-pointer'
                : 'vol-pill flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer';
            });
            renderCatalog();
          });
        });

        const searchInput = document.getElementById('catalog-search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        if (searchInput) {
          searchInput.addEventListener('input', () => {
            searchQuery = searchInput.value;
            if (clearSearchBtn) {
              clearSearchBtn.classList.toggle('hidden', searchQuery.trim() === '');
            }
            renderCatalog();
          });
        }
        if (clearSearchBtn && searchInput) {
          clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.classList.add('hidden');
            renderCatalog();
          });
        }

        const sortSelect = document.getElementById('catalog-sort-select');
        if (sortSelect) {
          sortSelect.addEventListener('change', () => {
            sortMode = sortSelect.value;
            renderCatalog();
          });
        }

        const resetAllFilters = () => {
          activeCategory = 'all';
          activeVolumeFilter = 'all';
          searchQuery = '';
          sortMode = 'default';
          if (searchInput) searchInput.value = '';
          if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
          if (sortSelect) sortSelect.value = 'default';
          document.querySelector(`.cat-pill[data-cat="all"]`)?.click();
          document.querySelector(`.vol-pill[data-vol="all"]`)?.click();
          renderCatalog();
        };
        document.getElementById('reset-catalog-filters-btn')?.addEventListener('click', resetAllFilters);
        document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);

        document.getElementById('toggle-all-accordions-btn')?.addEventListener('click', () => {
          allAccordionsExpanded = !allAccordionsExpanded;
          products.forEach(p => {
            openAccordionsByProduct[p.id + ':purpose'] = allAccordionsExpanded;
            openAccordionsByProduct[p.id + ':usage'] = allAccordionsExpanded;
            openAccordionsByProduct[p.id + ':comp'] = false;
          });
          const txt = document.getElementById('toggle-all-accordions-text');
          if (txt) txt.textContent = allAccordionsExpanded ? 'Згорнути всі описи' : 'Розгорнути всі описи';
          renderCatalog();
        });

        document.getElementById('products-grid')?.addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-action]');
          if (!btn) return;
          const action = btn.getAttribute('data-action');
          if (action === 'select-size') {
            const pid = btn.getAttribute('data-pid');
            const sidx = parseInt(btn.getAttribute('data-sidx'), 10) || 0;
            selectedSizeIndexByProduct[pid] = sidx;
            renderCatalog();
          } else if (action === 'toggle-acc') {
            const key = btn.getAttribute('data-acc-key');
            openAccordionsByProduct[key] = !openAccordionsByProduct[key];
            renderCatalog();
          } else if (action === 'add-to-quote') {
            const pid = btn.getAttribute('data-pid');
            const sidx = parseInt(btn.getAttribute('data-sidx'), 10) || 0;
            addToQuote(pid, sidx);
          } else if (action === 'save-inline-card') {
            const pid = btn.getAttribute('data-pid');
            const prod = products.find(p => p.id === pid);
            if (!prod) return;
            const cardEl = btn.closest('article');
            if (!cardEl) return;
            prod.sizes.forEach((sz, idx) => {
              const lIn = cardEl.querySelector(`input[data-inline-label="${pid}"][data-sidx="${idx}"]`);
              const pIn = cardEl.querySelector(`input[data-inline-price="${pid}"][data-sidx="${idx}"]`);
              if (lIn) sz.label = lIn.value.trim() || sz.label;
              if (pIn) {
                const v = parseFloat(pIn.value);
                if (isFinite(v)) sz.price = v.toFixed(2);
              }
            });
            saveAndApplyProducts(products, `Оновлено ціну для ${prod.id}: ${prod.name}`);
          }
        });

        const quoteDrawer = document.getElementById('quote-drawer');
        const quoteBackdrop = document.getElementById('quote-drawer-backdrop');
        const openQuote = () => {
          quoteDrawer?.classList.remove('translate-x-full');
          quoteBackdrop?.classList.remove('hidden');
        };
        const closeQuote = () => {
          quoteDrawer?.classList.add('translate-x-full');
          quoteBackdrop?.classList.add('hidden');
        };
        document.getElementById('open-quote-drawer-btn')?.addEventListener('click', openQuote);
        document.getElementById('close-quote-drawer-btn')?.addEventListener('click', closeQuote);
        quoteBackdrop?.addEventListener('click', closeQuote);

        document.getElementById('quote-items-list')?.addEventListener('click', (e) => {
          const inc = e.target.closest('button[data-quote-inc]');
          const dec = e.target.closest('button[data-quote-dec]');
          const del = e.target.closest('button[data-quote-del]');
          if (inc) {
            const idx = parseInt(inc.getAttribute('data-quote-inc'), 10);
            if (quoteCart[idx]) quoteCart[idx].qty += 1;
            renderQuoteCart();
          } else if (dec) {
            const idx = parseInt(dec.getAttribute('data-quote-dec'), 10);
            if (quoteCart[idx]) {
              quoteCart[idx].qty -= 1;
              if (quoteCart[idx].qty <= 0) quoteCart.splice(idx, 1);
            }
            renderQuoteCart();
          } else if (del) {
            const idx = parseInt(del.getAttribute('data-quote-del'), 10);
            quoteCart.splice(idx, 1);
            renderQuoteCart();
          }
        });

        document.getElementById('quote-clear-btn')?.addEventListener('click', () => {
          quoteCart = [];
          renderQuoteCart();
          showToast('Заявку очищено');
        });

        const buildQuoteSummaryText = () => {
          if (quoteCart.length === 0) return 'Прошу надіслати актуальний оптовий прайс-лист ТМ «ПІФ».';
          const lines = quoteCart.map((it, i) =>
            `${i + 1}. ${it.name} (${it.sizeLabel}) — ${it.qty} шт. × ${it.unitPrice.toFixed(2)} грн = ${(it.qty * it.unitPrice).toFixed(2)} грн`
          );
          const total = quoteCart.reduce((acc, it) => acc + it.qty * it.unitPrice, 0);
          return `Замовлення ТМ «ПІФ» (${priceMode === 'b2b' ? 'Опт B2B' : 'Роздріб'}):
` + lines.join("\n") + `\nРазом: ${total.toFixed(2)} грн`;
        };

        document.getElementById('quote-send-whatsapp-btn')?.addEventListener('click', () => {
          const text = encodeURIComponent(buildQuoteSummaryText());
          window.open(`https://api.whatsapp.com/send?phone=380679720560&text=${text}`, '_blank');
        });

        document.getElementById('quote-send-email-btn')?.addEventListener('click', () => {
          const subject = encodeURIComponent('Замовлення продукції ТМ «ПІФ»');
          const body = encodeURIComponent(buildQuoteSummaryText());
          window.location.href = `mailto:piftm.info@gmail.com?subject=${subject}&body=${body}`;
        });

        document.getElementById('calc-product-select')?.addEventListener('change', updateB2BCalculator);
        document.getElementById('calc-liters-slider')?.addEventListener('input', updateB2BCalculator);

        document.getElementById('hero-download-csv-btn')?.addEventListener('click', downloadCsvPriceList);

        const inqForm = document.getElementById('contact-inquiry-form');
        const composeInquiryText = () => {
          const name = document.getElementById('inq-name')?.value.trim() || 'Клієнт';
          const phone = document.getElementById('inq-phone')?.value.trim() || '';
          const type = document.getElementById('inq-type')?.value || '';
          const city = document.getElementById('inq-city')?.value.trim() || '';
          const msg = document.getElementById('inq-message')?.value.trim() || '';
          let full = `Заявка з сайту ТМ «ПІФ»
Ім'я/Компанія: ${name}
Телефон: ${phone}
Тип: ${type}`;
          if (city) full += `
Місто/Доставка: ${city}`;
          if (msg) full += `
Коментар: ${msg}`;
          if (quoteCart.length > 0) {
            full += `

` + buildQuoteSummaryText();
          }
          return full;
        };

        inqForm?.addEventListener('submit', (e) => {
          e.preventDefault();
          const text = encodeURIComponent(composeInquiryText());
          window.open(`https://api.whatsapp.com/send?phone=380679720560&text=${text}`, '_blank');
          showToast('Відкрито WhatsApp із сформованою заявкою!');
        });

        document.getElementById('inq-send-email-btn')?.addEventListener('click', () => {
          const subject = encodeURIComponent('Запит / Замовлення з сайту ТМ «ПІФ»');
          const body = encodeURIComponent(composeInquiryText());
          window.location.href = `mailto:piftm.info@gmail.com?subject=${subject}&body=${body}`;
        });

        [
          'top-price-editor-btn',
          'mob-open-editor-btn',
          'hero-edit-prices-btn',
          'catalog-edit-prices-btn',
          'footer-price-editor-btn',
          'bottom-discreet-login'
        ].forEach(id => {
          document.getElementById(id)?.addEventListener('click', openPriceEditorOrGate);
        });

        document.getElementById('gate-close-btn')?.addEventListener('click', () => {
          document.getElementById('price-editor-gate')?.classList.add('hidden');
        });
        document.getElementById('gate-instant-unlock-btn')?.addEventListener('click', () => {
          unlockEditorAndOpen(true);
        });
        document.getElementById('price-editor-gate-form')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const val = document.getElementById('price-editor-password')?.value.trim() || '';
          const errEl = document.getElementById('price-editor-gate-error');
          if (val === DEFAULT_PASSWORD || val.length >= 1) {
            if (errEl) errEl.classList.add('hidden');
            unlockEditorAndOpen(true);
          } else {
            if (errEl) {
              errEl.textContent = 'Введіть пароль (за замовчуванням: changeme)';
              errEl.classList.remove('hidden');
            }
          }
        });

        document.getElementById('banner-open-drawer-btn')?.addEventListener('click', openPriceEditorDrawer);
        document.getElementById('banner-download-json-btn')?.addEventListener('click', () => downloadJsonFile(products));
        document.getElementById('banner-copy-json-btn')?.addEventListener('click', () => copyJsonToClipboard(products));
        document.getElementById('banner-lock-editor-btn')?.addEventListener('click', () => {
          editorUnlocked = false;
          safeRemoveSession(SESSION_UNLOCK_KEY);
          updateDraftPill();
          renderCatalog();
          showToast('Режим редагування цін вимкнено');
        });

        document.querySelectorAll('.bulk-pct-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const pct = parseFloat(btn.getAttribute('data-bulk-pct'));
            applyBulkPercentageToProducts(products, pct);
            saveAndApplyProducts(products, `Ціни змінено на ${pct > 0 ? '+' : ''}${pct}%`);
          });
        });

        document.getElementById('price-editor-close')?.addEventListener('click', closePriceEditorDrawer);
        document.getElementById('price-editor-backdrop')?.addEventListener('click', closePriceEditorDrawer);

        const tabVisualBtn = document.getElementById('tab-visual-editor-btn');
        const tabJsonBtn = document.getElementById('tab-raw-json-btn');
        const visualListEl = document.getElementById('price-editor-list');
        const jsonTabEl = document.getElementById('price-editor-json-tab');

        tabVisualBtn?.addEventListener('click', () => {
          visualListEl?.classList.remove('hidden');
          jsonTabEl?.classList.add('hidden');
          jsonTabEl?.classList.remove('flex');
          tabVisualBtn.className = 'px-3 py-1 rounded-md bg-[#339af0] text-white font-semibold cursor-pointer';
          if (tabJsonBtn) tabJsonBtn.className = 'px-3 py-1 rounded-md bg-white text-slate-700 border border-slate-300 font-semibold cursor-pointer';
          renderEditorDrawerList();
        });

        tabJsonBtn?.addEventListener('click', () => {
          syncWorkingCopyFromInputs();
          syncRawJsonTextarea();
          visualListEl?.classList.add('hidden');
          jsonTabEl?.classList.remove('hidden');
          jsonTabEl?.classList.add('flex');
          tabJsonBtn.className = 'px-3 py-1 rounded-md bg-[#339af0] text-white font-semibold cursor-pointer';
          if (tabVisualBtn) tabVisualBtn.className = 'px-3 py-1 rounded-md bg-white text-slate-700 border border-slate-300 font-semibold cursor-pointer';
        });

        document.getElementById('apply-raw-json-btn')?.addEventListener('click', () => {
          const ta = document.getElementById('raw-json-textarea');
          if (!ta) return;
          try {
            const parsed = JSON.parse(ta.value);
            if (!Array.isArray(parsed)) throw new Error('JSON має бути масивом продуктів');
            const byId = {};
            parsed.forEach(item => { if (item && item.id) byId[item.id] = item; });
            editorWorkingCopy.forEach(prod => {
              const incoming = byId[prod.id];
              if (incoming) {
                if (incoming.name) prod.name = incoming.name;
                if (Array.isArray(incoming.sizes) && incoming.sizes.length) {
                  prod.sizes = incoming.sizes.map(s => ({
                    label: String(s.label || 'Стандарт'),
                    price: Number(parseFloat(s.price) || 0).toFixed(2)
                  }));
                }
              }
            });
            saveAndApplyProducts(editorWorkingCopy, 'JSON успішно імпортовано та застосовано!');
            tabVisualBtn?.click();
          } catch (err) {
            showToast('Помилка у форматі JSON: перевірте синтаксис');
          }
        });

        visualListEl?.addEventListener('click', (e) => {
          const addBtn = e.target.closest('button[data-ed-add-size]');
          const delBtn = e.target.closest('button[data-ed-del-size]');
          if (addBtn) {
            syncWorkingCopyFromInputs();
            const pIdx = parseInt(addBtn.getAttribute('data-ed-add-size'), 10);
            if (editorWorkingCopy[pIdx]) {
              editorWorkingCopy[pIdx].sizes.push({ label: '10л (Опт)', price: '250.00' });
              renderEditorDrawerList();
              syncRawJsonTextarea();
            }
          } else if (delBtn) {
            syncWorkingCopyFromInputs();
            const [pIdx, sIdx] = delBtn.getAttribute('data-ed-del-size').split(':').map(Number);
            if (editorWorkingCopy[pIdx] && editorWorkingCopy[pIdx].sizes.length > 1) {
              editorWorkingCopy[pIdx].sizes.splice(sIdx, 1);
              renderEditorDrawerList();
              syncRawJsonTextarea();
            } else {
              showToast('У товару має залишатися щонайменше 1 фасування');
            }
          }
        });

        document.querySelectorAll('.editor-pct-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            syncWorkingCopyFromInputs();
            const pct = parseFloat(btn.getAttribute('data-editor-pct'));
            applyBulkPercentageToProducts(editorWorkingCopy, pct);
            renderEditorDrawerList();
            syncRawJsonTextarea();
            showToast(`У таблиці застосовано ${pct > 0 ? '+' : ''}${pct}% (натисніть «Зберегти» для фіксації)`);
          });
        });

        document.getElementById('apply-custom-pct-btn')?.addEventListener('click', () => {
          const input = document.getElementById('custom-pct-input');
          const pct = parseFloat(input?.value || '0');
          if (!isFinite(pct) || pct === 0) {
            showToast('Введіть відсоток (наприклад: 7.5 або -5)');
            return;
          }
          syncWorkingCopyFromInputs();
          applyBulkPercentageToProducts(editorWorkingCopy, pct);
          renderEditorDrawerList();
          syncRawJsonTextarea();
          showToast(`Застосовано ${pct > 0 ? '+' : ''}${pct}% до всіх позицій`);
        });

        document.getElementById('price-editor-save-draft')?.addEventListener('click', () => {
          syncWorkingCopyFromInputs();
          saveAndApplyProducts(editorWorkingCopy, 'Усі зміни цін збережено та опубліковано у каталозі!');
          closePriceEditorDrawer();
        });

        document.getElementById('price-editor-download')?.addEventListener('click', () => {
          syncWorkingCopyFromInputs();
          saveAndApplyProducts(editorWorkingCopy, 'Зміни збережено + завантажено products.json');
          downloadJsonFile(editorWorkingCopy);
        });

        document.getElementById('price-editor-copy')?.addEventListener('click', () => {
          syncWorkingCopyFromInputs();
          copyJsonToClipboard(editorWorkingCopy);
        });

        const resetBar = document.getElementById('reset-confirm-bar');
        document.getElementById('price-editor-clear-draft')?.addEventListener('click', () => {
          resetBar?.classList.remove('hidden');
        });
        document.getElementById('confirm-reset-no-btn')?.addEventListener('click', () => {
          resetBar?.classList.add('hidden');
        });
        document.getElementById('confirm-reset-yes-btn')?.addEventListener('click', () => {
          safeRemoveLocal(STORAGE_KEY);
          products = deepClone(BASELINE_PRODUCTS);
          editorWorkingCopy = deepClone(BASELINE_PRODUCTS);
          resetBar?.classList.add('hidden');
          updateDraftPill();
          renderEditorDrawerList();
          syncRawJsonTextarea();
          renderCatalog();
          updateB2BCalculator();
          showToast('Відновлено заводські ціни з базового products.json');
        });
      });
    })();