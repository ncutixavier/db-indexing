"use strict";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Doctors",
      [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          specialization: "General Physician",
          age: 45,
          practice_year: 2001,
          country: "Germany",
          state: "Berlin",
          city: "Berlin",
          zip: 10999,
          hospital: "Hospital A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Doctors", null, {}),
};
