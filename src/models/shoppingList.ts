import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/services/sql/sql-connection';

class ShoppingList extends Model {}

ShoppingList.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  מוצרי_ניקיון: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  גבינות: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ירקות_ופירות: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  בשר_ודגים: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  מאפים: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'ShoppingList',
});

export default ShoppingList;
