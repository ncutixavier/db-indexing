'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Doctors', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.INTEGER
      },
      practice_year: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      hospital: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.addIndex('Doctors',['specialization']);
    await queryInterface.addIndex('Doctors',['zip']);
    await queryInterface.addIndex('Doctors',['city']);
    await queryInterface.addIndex('Doctors',['specialization','zip']);
    await queryInterface.addIndex('Doctors',['specialization','city']);
    await queryInterface.addIndex('Doctors',['specialization','hospital']);
    await queryInterface.addIndex('Doctors',['specialization','city','practice_year']);
    await queryInterface.addIndex('Doctors',['specialization','zip','practice_year']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctors');
  }
};