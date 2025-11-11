import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'property_db',
  ssl: process.env.DB_SSL === 'true',
  max: 1,
});

export const db = drizzle(client, { schema });
