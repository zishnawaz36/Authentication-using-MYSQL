
import { Sequelize } from "sequelize";
require('dotenv').config();

const sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USE,
    process.env.DB_PASS,

    {
        host:process.env.DB_HOST,
        dislect:'mysql',
    }
);

export default sequelize;
