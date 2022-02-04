module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Корм',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Игрушки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Костюмы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
