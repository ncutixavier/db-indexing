
import  randomEmail from "random-email";
// const randomEmail = require("random-email");
import randomName from "random-name";
// const randomName = require("random-name");
import utils  from "../utils";
// const utils = require("../utils");
import hospitals from "../helpers/hospitals";
// const hospitals = require("../helpers/hospitals");
import { QueryTypes } from "sequelize";
// const { QueryTypes } = require('sequelize');
import specializations from "../helpers/specializations";
// const specializations = require("../helpers/specializations");
import zipcodes from "../helpers/zipcodes";
// const zipcodes = require("../helpers/zipcodes");
import models from "../database/models";
// const models = require("../database/models");

require("dotenv").config();



function generateRandomDoctor() {
  const zipcode = zipcodes[Math.floor(Math.random() * zipcodes.length)];
  const doctor = {
    name: randomName(),
    email: randomEmail(),
    specialization:
    specializations[Math.floor(Math.random() * specializations.length)],
    dob: utils.getRandomNumberBetween(1952, 1997),
    practice_year: utils.getRandomNumberBetween(1970, 2020),
    country: "Germany",
    state: zipcode.state,
    city: zipcode.place,
    zip: parseInt(zipcode.zipcode),
    hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
  };

  return doctor;
}

let doctors = []
const createDoctor = async () => {
  try {
    doctors.push(generateRandomDoctor())
  } catch (error) {
    console.log(error)

  }
};

const creatAllUsers = async ()=>{
  const doctorsList = await models.Doctors.bulkCreate(doctors)
}


for (let i = 0; i < 30000; i++) {
  createDoctor();
}

creatAllUsers()
