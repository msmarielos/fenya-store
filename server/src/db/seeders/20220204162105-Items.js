module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Items', [
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
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
