import { index, integer, uniqueIndex } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyCampaigns = pgTable(
  'property_campaigns',
  {
    listingId: integer('listing_id')
      .notNull()
      .references(() => propertyListings.id),
    code: integer('code').notNull(),
  },
  (table) => ({
    campaignUniqueIdx: uniqueIndex('campaign_unique_idx').on(table.code, table.listingId),
  })
);
