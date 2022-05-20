'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TimekeepingInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id :{
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: 'users',
          // This is the column name of the referenced model
          key: 'id',
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TimekeepingInfos');
  }
};