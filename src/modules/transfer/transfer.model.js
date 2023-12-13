import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

const Transfer = sequelize.define('Transfers', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  senderUserid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverUserid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Transfer;
