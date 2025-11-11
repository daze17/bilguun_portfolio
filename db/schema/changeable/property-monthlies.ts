import { integer, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyMonthlies = pgTable('property_monthlies', {
  listingId: integer('listing_id')
    .primaryKey()
    .notNull()
    .references(() => propertyListings.id)
    .unique(),
  isMonthly: integer('is_monthly'),
  monthlyDayCost: integer('monthly_day_cost'),
  monthlyCleaningCost: integer('monthly_cleaning_cost'),
  monthlyBedCost: integer('monthly_bed_cost'),
  monthlyFee: integer('monthly_fee'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
