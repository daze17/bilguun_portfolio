import { integer, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyDealings = pgTable('property_dealings', {
  listingId: integer('listing_id')
    .notNull()
    .references(() => propertyListings.id),
  code: integer('code').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
