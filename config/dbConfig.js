import { Sequelize } from "sequelize";
import { config } from "dotenv";
import envFile from "./envConfig.js";
import path from 'path';


// Load environment variables from the appropriate .env file
config({ path: path.resolve(process.cwd(), envFile) }); 

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

export default db;