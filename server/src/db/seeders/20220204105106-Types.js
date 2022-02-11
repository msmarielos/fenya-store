module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Types', [
      {
        name: 'Кошки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Собаки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
