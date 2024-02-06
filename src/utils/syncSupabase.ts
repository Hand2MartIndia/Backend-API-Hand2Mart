import { Model, DataTypes, Sequelize } from 'sequelize';
import { SupabaseClient } from '@supabase/supabase-js';

interface SyncOptions {
  alter?: boolean;
}

interface SyncWithSupabaseOptions {
  model: typeof Model;
  tableName: string;
  syncOptions?: SyncOptions;
  supabaseClient: SupabaseClient;
}


export const syncWithSupabase = async ({
  model,
  tableName,
  syncOptions = {},
  supabaseClient,
}: SyncWithSupabaseOptions): Promise<void> => {
  try {
    // // Sync with the local database
    // await model.sync(syncOptions);

    // Sync with Supabase
    await supabaseClient.from(tableName).upsert([], { onConflict: 'id' });

    console.log(`Sync with Supabase for table '${tableName}' successful.`);
  } catch (error) {
    console.error(`Error syncing with Supabase for table '${tableName}':`, error);
  }
};
