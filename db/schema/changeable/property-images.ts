import { char, index, integer, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyImages = pgTable(
  'property_images',
  {
    id: char('id', { length: 36 }).primaryKey(),
    listingId: integer('listing_id')
      .notNull()
      .references(() => propertyListings.id),
    path: varchar('path', { length: 255 }),
    url: varchar('url', { length: 255 }),
    orderNum: integer('order_num').notNull(),
    typeCode: integer('type_code').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (table) => ({
    idIdx: index('property_images_id_idx').on(table.id),
  })
);
