import { date, index, integer, serial, smallint, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { properties } from '../immutable/properties';

export const propertyListings = pgTable(
  'property_listings',
  {
    id: serial('id').primaryKey(),
    propertyId: integer('property_id')
      .notNull()
      .references(() => properties.id),
    publishedAt: timestamp('published_at'),
    propertyUpdatedAt: timestamp('property_updated_at'),
    propertyNextUpdateAt: timestamp('property_next_update_at'),
    availableMoveInDate: date('available_move_in_date'),
    availableMoveInTimingCode: integer('available_move_in_timing_code').notNull(),
    isActive: smallint('is_active').notNull().default(1),
    storeId: smallint('store_id').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => ({
    propertyIdIdx: index('property_id_idx').on(table.propertyId),
    publishedAtIdx: index('published_at_idx').on(table.publishedAt),
  })
);
