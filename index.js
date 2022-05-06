const randomEmail = require("random-email");
const randomName = require("random-name");
const utils = require("./utils");
const hospitals = require("./helpers/hospitals");
const specializations = require("./helpers/specializations");
const zipcodes = require("./helpers/zipcodes");
const models = require("./database/models");
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

const createDoctor = async (req, res) => {
  try {
    const doctors = await models.Doctors.create(generateRandomDoctor());
    console.log("Created doctor: " + doctors.id);
  } catch (error) {
    console.log(error)

  }
};


for (let i = 0; i < 30000; i++) {
  createDoctor();
}

