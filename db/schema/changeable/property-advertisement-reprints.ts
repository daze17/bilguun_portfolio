import { integer, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyAdvertisementReprints = pgTable('property_advertisement_reprints', {
  listingId: integer('listing_id')
    .notNull()
    .references(() => propertyListings.id),
  code: integer('code').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
