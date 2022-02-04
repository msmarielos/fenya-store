module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Корм',
        url: 'food',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Игрушки',
        url: 'toys',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Костюмы',
        url: 'clothes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
