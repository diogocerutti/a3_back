import { Sequelize } from 'sequelize'; 

const sequelize = new Sequelize('postgres', 'postgres', 'postdi8', {
  dialect: 'postgres',
  host: 'localhost', 
  schema: 'public',
});

export default sequelize; 