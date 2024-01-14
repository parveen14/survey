'use strict';

const { uuid } = require('uuidv4');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userId = uuid();

    await queryInterface.bulkInsert('users', [{
      id:userId,
      first_name: 'Parveen',
      last_name: 'Kinger',
      email: 'parveen.kngr@gmail.com',
      password: '123456789',
      status:'active',
      created_at: new Date(),
      updated_at: new Date()
    }]);
    await queryInterface.bulkInsert('user_tenants', [{
      id:uuid(),
      user_id: userId,
      tenant_id: uuid(),
      created_at: new Date(),
      updated_at: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('user_tenants', null, {})
  }
};
