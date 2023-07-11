import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ormcrud', 'devrafael', 'zd!dh54WSA2', {
  host: 'ormcrud.mysql.database.azure.com',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
