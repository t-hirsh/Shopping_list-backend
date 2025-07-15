import sequelize from './sql-connection';
import ShoppingList from '../../../models/shoppingList';

const syncDatabase = async () => {
  try {
    await sequelize.getQueryInterface().dropTable('ShoppingLists');
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default syncDatabase;