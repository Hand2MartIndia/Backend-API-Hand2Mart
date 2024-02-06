import { Sequelize } from 'sequelize';
import { SUPABASE_DB_NAME, SUPABASE_HOST, SUPABASE_PASSWORD, SUPABASE_PORT, SUPABASE_USERNAME } from './config';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: SUPABASE_HOST,
  port: SUPABASE_PORT,
  database: SUPABASE_DB_NAME,
  username: SUPABASE_USERNAME,
  password: SUPABASE_PASSWORD,
});

export {Sequelize}
