import { QueryTypes } from "sequelize";
import models from "../database/models";

require("dotenv").config();

const {sequelize} = models;


const queryRun = async (query)=>{
  let response = {}
  try {
    const users = await sequelize.query(query, { type: QueryTypes.SELECT });
    response.data = users
    response.status = true
    return response
  } catch (error) {
    response.status = false
    response.data = error.message
    return response
    // console.log(error)
  }

}

export default queryRun;
