module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@admin.ru',
        password:
          '$2a$10$Im20uWuaQApO4/Ho4JaHFetXhwBH15DVksYr8KDP7uynEQ7LxMoJi',
        isAdmin: true,
        phone: '8-800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
