import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST: string = process.env.DB_HOST as string;
const DB_PORT: number = parseInt(process.env.DB_PORT as string, 10);
const DB_DATABASE: string = process.env.DB_DATABASE as string;
const DB_USERNAME: string = process.env.DB_USERNAME as string;
const DB_PASSWORD: string = process.env.DB_PASSWORD as string;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mssql'
});

export const fetchCategories = async () => {
  try {
    const tableDescription = await sequelize.getQueryInterface().describeTable('ShoppingLists');
    const categories = Object.keys(tableDescription).map(key => ({
      name: key.replace('_', ' '),
    }));
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default sequelize;
