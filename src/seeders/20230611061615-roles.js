module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('roles',
      [
        {
          "id": 0,
          "role_name": "As Customer",
          "status": "active",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 1,
          "role_name": "As Owner",
          "status": "active",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        }

      ]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('roles', null, {});
  }
};