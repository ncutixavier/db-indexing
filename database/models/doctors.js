'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctors.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    specialization: DataTypes.STRING,
    age: DataTypes.INTEGER,
    practice_year: DataTypes.INTEGER,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    hospital: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};