import { integer, serial, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyFacilities = pgTable('property_facilities', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id')
    .notNull()
    .references(() => propertyListings.id),
  code: integer('code').notNull(),
  status: integer('status').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
