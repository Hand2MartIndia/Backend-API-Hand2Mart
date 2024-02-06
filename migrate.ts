import { Model } from 'sequelize';
import Dealer from './src/models/SequalizeModels/dealer.model';

interface MigrateOptions {
  alter?: boolean;
}

export const migrateModels = async (models: Array<typeof Model>, options: MigrateOptions = {}): Promise<void> => {
  try {
    // Create tables for each model
    for (const model of models) {
      await model.sync(options);
    }

    console.log('Migration successful.');
  } catch (error) {
    console.error('Error running migration:', error);
  } finally {
    process.exit();
  }
};

// Add models here - 
const sequelizeModels = [Dealer]; 

migrateModels(sequelizeModels, { alter: true });
