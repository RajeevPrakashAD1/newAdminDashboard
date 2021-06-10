// let { Sequelize } = require("sequelize");
const mysql = require("mysql2");
// let sequelize = new Sequelize(
//   "mysql://root:Jivan123456#@localhost:3306/dive_to_learn"
// );
// const sequelize = new Sequelize(
//   process.env.database,
//   process.env.user,
//   process.env.password,
//   {
//     host: process.env.host,
//     define: {
//       timestamps: false,
//     },
//     dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   }
// );
let connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  }
});
// const sequelize = new Sequelize(
//   "dive_to_learn",
//   "root",
//   "Jivan123456#",
//   {
//     host: "localhost",
//     dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   }
// );
// async function connectDb() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
// connectDb();
module.exports = { connection };
