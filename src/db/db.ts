import { Sequelize } from 'sequelize-typescript';


// Sequelize Configuration
const sequelize = new Sequelize({
  database: 'your_database_name',
  dialect: 'postgres',
  username: 'your_username',
  password: 'your_password',
  models: [__dirname + '/models'], // Path to your Sequelize model files
});

export default sequelize;