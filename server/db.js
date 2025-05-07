import { Sequelize } from 'sequelize';
import { configDotenv } from 'dotenv';

// Loading env vars
configDotenv();

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

export default sequelize;
