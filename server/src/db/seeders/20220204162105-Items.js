module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Items', [
      // корма для кошек
      {
        title:
          'Корм GO! беззерновой для котят и кошек с чувствительным пищеварением, со свежей уткой',
        description:
          'Корма GO! Sensitivities разработаны специально для кошек с особыми потребностями в питании, поэтому идеально подходят для животных с чувствительным пищеварением.Все рецепты линейки GO! Sensitivities имеют одинаковые базовые компоненты, благодаря чему вы можете легко переводить питомца с одного корма на другой в пределах линейки без выделения времени на привыкание.',
        price: 4500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/77/83/93/511377_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Корм GO! беззерновой для котят и кошек с чувствительным пищеварением с форелью и лососем',
        description:
          'Корма GO! Sensitivities разработаны специально для кошек с особыми потребностями в питании, поэтому идеально подходят для животных с чувствительным пищеварением.Все рецепты линейки GO! Sensitivities имеют одинаковые базовые компоненты, благодаря чему вы можете легко переводить питомца с одного корма на другой в пределах линейки без выделения времени на привыкание.',
        price: 4500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/77/83/93/511377_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Корм GO! для котят и кошек, со свежей курицей, фруктами и овощами',
        description:
          'Корма GO! Sensitivities разработаны специально для кошек с особыми потребностями в питании, поэтому идеально подходят для животных с чувствительным пищеварением.Все рецепты линейки GO! Sensitivities имеют одинаковые базовые компоненты, благодаря чему вы можете легко переводить питомца с одного корма на другой в пределах линейки без выделения времени на привыкание.',
        price: 4500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/c4/40/19/511381_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Корм GO! беззерновой для котят и кошек с чувствительным пищеварением с форелью и лососем',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 3500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/70/87/14/511379_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Papillon игрушка для кошек Светоотражающая мышка с погремушкой',
        description:
          'Всевозможные удочки-дразнилки, игрушки в виде животных, игрушки с погремушками и бубенчиками. Игрушки мягкие и твердые, шуршащие и звенящие, маленькие и побольше.',
        price: 90,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/26/f0/87/308722_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Papillon игрушка для кошек "Мячик" с бубенчиком, зеленый, нейлон, 5 см',
        description:
          'Всевозможные удочки-дразнилки, игрушки в виде животных, игрушки с погремушками и бубенчиками. Игрушки мягкие и твердые, шуршащие и звенящие, маленькие и побольше.',
        price: 100,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/d8/e3/6f/308723_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Корм Royal Canin для бывающих на улице кошек',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 2200,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/f4/1d/a1/312566_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Антицарапки голубь сизый с валерианой',
        description:
          'Игрушка набита синтепухом. В нее добавлена кошачья мята и валериана, что увеличит вероятность проявления интереса к ней вашей кошки, так как одни кошки больше реагируют на кошачью мяту, а другие - на валериану.',
        price: 170,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/27/bc/c1/549433_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Корм Royal Canin для кастрированных кошек и котов: 1-7 лет',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 2200,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/4f/68/b7/312598_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Petsiki Динамическая когтеточка "Яйцо"',
        description:
          'Динамическая когтеточка "Яйцо" позволяет точить когти и играть одновременно. Благодаря принципу неваляшки клубок всегда возвращается в исходное положение, а безопасный джутовый канат помогает бережно точить когти. Вытянутая форма когтеточки позволяет удобно точить когти на задних лапах.',
        price: 500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/4d/f4/c4/514442_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Корм Royal Canin для комфортного пищеварения кошек от 1 года',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 2200,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/3f/52/00/382816_400x400.jpg',
        rating: 0,
        categoryType_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Catit Senses 2.0 Трек игровой малый',
        description:
          'Игровой малый трек - интерактивная игрушка, позволяющая составить более 100 конфигураций.',
        price: 1400,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/15/77/37/549548_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Go! Консервы беззерновые с тушеной курицей, индейкой и мясом утки',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 220,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/db/9a/d6/425696_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Triol занимательная игрушка для кошек "Пират"',
        description:
          'Игрушка стимулирует охотничьи навыки кошек и призывает их к активному выслеживанию добычи. Просто поставьте этот маяк перед животным и наблюдайте за тем, как кошка будет стараться поймать маленькую "рыбку" на конце маятника, используя всевозможные способы.',
        price: 1000,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/39/8e/3a/528677_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Triol Marvel игровой туннель для кошек "Marvel" Человек-паук',
        description:
          'Мягкий, просторный, шуршащий и очень теплый, такой туннель станет не только прекрасным аксессуаром для активной игры, но и отличным местом для отдыха после интенсивных "кардионагрузок".',
        price: 1000,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/2d/4a/44/507845_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Trixie игрушка "Обезьяна" с кошачьей мятой',
        description: 'Игрушка "Обезьяна" для кошек, размер: 12 см',
        price: 300,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/68/02/74/558408_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Papillon игрушка для кошек "НЛО", 20х25 см, бирюзовая, плюш',
        description:
          'Игрушки мягкие и твердые, шуршащие и звенящие, маленькие и побольше. Также в ассортименте производителя Papillon представлены канаты для перетягивания, латексные игрушки для прорезывания зубов, плюшевые косточки, мышки из натурального меха и многое другое.',
        price: 1100,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/95/1c/3a/308725_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Go! Консервы беззерновые с индейкой, для собак',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 380,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/c4/19/7d/425689_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Petstages игрушка для кошек "Трек 3 этажа"',
        description:
          'Игровой трек с мячиками идеально подходит для одной или нескольких кошек. Яркий мячик катается по кругу, что очень привлекает внимание кошки. Оторваться невозможно! Как ни стараешься, всё равно не поймаешь, но и не потеряешь.',
        price: 1350,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/23/d6/3f/499342_400x400.jpg',
        rating: 0,
        categoryType_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Корм GO! для щенков и собак, со свежим лососем и овсянкой',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 4600,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/5e/cc/36/511383_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Ferribiella аксессуары игрушка "Джунгли зовут"',
        description:
          'Не можете отучить щенка грызть обувь? Легальная альтернатива домашнему хулиганству - безопасна и полезна во время активного роста прорезывания зубов.',
        price: 900,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/fc/e0/06/416731_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Корм NOW FRESH беззерновой "Контроль веса" для собак, с индейкой, уткой и овощами',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 220,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/b4/48/2b/511386_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Ferribiella аксессуары игрушка "Развяжи шнурок" латексная для собак',
        description:
          'Не можете отучить щенка грызть обувь? Легальная альтернатива домашнему хулиганству - безопасна и полезна во время активного роста прорезывания зубов.',
        price: 900,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/bb/5a/b5/417559_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Papillon игрушка для собак "Зов Джунглей", 9 см, латекс',
        description:
          'Игрушки мягкие и твердые, шуршащие и звенящие, маленькие и побольше. Также в ассортименте производителя Papillon представлены канаты для перетягивания, латексные игрушки для прорезывания зубов, плюшевые косточки, мышки из натурального меха и многое другое.',
        price: 390,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/33/6d/96/23746_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'GiGwi барсук, игрушка с двумя пищалками',
        description:
          'Игрушки мягкие и твердые, шуршащие и звенящие, маленькие и побольше. Также в ассортименте производителя Papillon представлены канаты для перетягивания, латексные игрушки для прорезывания зубов, плюшевые косточки, мышки из натурального меха и многое другое.',
        price: 530,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/de/6d/49/498190_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Корм NOW FRESH беззерновой "Контроль веса" для собак крупных пород с индейкой, уткой и овощами',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 380,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/45/f2/10/539989_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title:
          'Triol бутылка "Жучковское", виниловая игрушка с пищалкой для собак',
        description:
          'Порадуйте себя и своего питомца оригинальной виниловой игрушкой. Бутылка "Жучковского" утолит жажду вашего питомца грызть, а также сбережёт обувь и мебель.',
        price: 300,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/8a/b1/8b/497890_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Trixie игрушка "Бургер", плюш, 13 см',
        description: 'Игрушка для собак "Бургер", со звуком, размер: 13 см.',
        price: 590,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/7c/24/d1/558336_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Triol игрушка "Спящий барашек" для собак, мягкая шуршащая',
        description:
          'Забавная игрушка с шуршалкой "Спящий барашек" обязательно понравится вашему питомцу. Такую игрушку удобно носить в зубах и вытаскивать из укромных уголков, а шуршащий наполнитель заинтересует собаку любого возраста.',
        price: 330,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/4e/5b/17/561494_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Игрушка для животных «Пицца Розетта»',
        description:
          'Яркие и сочные принты привлекут внимание питомца и займут его на продолжительное время. Внутри игрушки находится натуральная кошачья мята для еще большего развлечения и удовольствия!',
        price: 200,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/bf/76/a4/553876_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Yami-Yami игрушка для собак "Веселая Морковка"',
        description: 'Отличная игрушка с пищалкой для веселых игр с питомцем.',
        price: 150,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/9f/3e/43/510566_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'Корм GO! для щенков и собак, со свежим лососем и овсянкой',
        description:
          'Некоторые кошки определенно мясоеды, что говорит об их хищной природе. Этот беззерновой рецепт богат белками, обеспечивает полноценное и сбалансированное питание, чтобы помочь вашей кошке оставаться здоровой и сохранять отличную физическую форму.',
        price: 4600,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/5e/cc/36/511383_400x400.jpg',
        rating: 0,
        categoryType_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
      {
        title: 'MPets игрушка Ёжик длинный серый мягкая',
        description:
          'Игрушка мягкая MPets Ежик длинный для собак. Подходит для игры дома, а также для активных игр на улице.',
        price: 500,
        img: 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/41/5f/bb/559195_400x400.jpg',
        rating: 0,
        categoryType_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        amount: 1,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
