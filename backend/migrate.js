const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const fs = require("fs")

dotenv.config();

const migrate = async () => {
    const connection = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: true
    })

    await connection.query("DROP DATABASE IF EXISTS " + process.env.DB_NAME)
    await connection.query("CREATE DATABASE " + process.env.DB_NAME)
    await connection.query("USE " + process.env.DB_NAME)

    const sqlFile = fs.readFileSync("./script.sql", "utf-8");

    await connection.query(sqlFile)

    connection.end()

    console.log("Sucess, the database has been reached and migrated");

}

try {
    migrate()
} catch (e) {
    console.error(e)
}