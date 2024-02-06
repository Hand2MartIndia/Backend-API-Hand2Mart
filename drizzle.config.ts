import { defineConfig } from 'drizzle-kit'
import { SUPABASE_CONNECTION_URL } from './src/config/config';
export default defineConfig({
 schema: "./schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: SUPABASE_CONNECTION_URL,
  },
  verbose: true,
  strict: true,
})