import express from 'express';
import routes from './routes';

// import routes from ""
// const randomEmail = require("random-email");
// const randomName = require("random-name");
// const utils = require("./utils");
// const hospitals = require("./helpers/hospitals");
// const { QueryTypes } = require('sequelize');
// const specializations = require("./helpers/specializations");
// const zipcodes = require("./helpers/zipcodes");
// const models = require("./database/models");
// require("dotenv").config();
// const {sequelize} = models;


const app = express();

app.use(express.json());

app.use('/api/v1/', routes);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ status: statusCode, error: err.message, stack: err.stack });
  next(err);
});

app.listen(3000,()=>{
  console.log("server is runnig on port 3000")
})
// function generateRandomDoctor() {
//   const zipcode = zipcodes[Math.floor(Math.random() * zipcodes.length)];
//   const doctor = {
//     name: randomName(),
//     email: randomEmail(),
//     specialization:
//       specializations[Math.floor(Math.random() * specializations.length)],
//     dob: utils.getRandomNumberBetween(1952, 1997),
//     practice_year: utils.getRandomNumberBetween(1970, 2020),
//     country: "Germany",
//     state: zipcode.state,
//     city: zipcode.place,
//     zip: parseInt(zipcode.zipcode),
//     hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
//   };

//   return doctor;
// }

// let doctors = []
// const createDoctor = async () => {
//   try {
//     doctors.push(generateRandomDoctor())
//   } catch (error) {
//     console.log(error)

//   }
// };

// const creatAllUsers = async ()=>{
//   const doctorsList = await models.Doctors.bulkCreate(doctors)
// }


// const queryRun = async (query)=>{
//   try {
//     const users = await sequelize.query(query, { type: QueryTypes.SELECT });
//     console.log(users)
//   } catch (error) {
//     console.log(error)
//   }

// }

// for (let i = 0; i < 30000; i++) {
//   createDoctor();
// }

// creatAllUsers()


// queryRun(`select * from Doctors WITH(INDEX(doctors_specialization_zip)) where "zip" = 26639 and "specialization" = 'Urology'`)


// [
//   {
//   "query":"",
//   "single_indexes":"",
//   "double_inde":"",
//   }
// ]