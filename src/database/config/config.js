require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    password:process.env.DB_PASSWORD,
    username:process.env.DB_USER_NAME,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    // dialect: "postgres",
    // logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST,
    port: process.env.LOCAL_DB_PORT,
    dialect: 'mssql',
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST,
    port: process.env.LOCAL_DB_PORT,
    dialect: 'mssql',
    logging: false,
  },
};
