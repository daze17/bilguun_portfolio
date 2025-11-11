import { decimal, index, integer } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertiesBuilding } from './properties-building';

export const propertyLocations = pgTable(
  'property_locations',
  {
    propertiesBuildingId: integer('properties_building_id')
      .notNull()
      .references(() => propertiesBuilding.id),
    longitude: decimal('longitude', { precision: 10, scale: 7 }).notNull(),
    latitude: decimal('latitude', { precision: 10, scale: 7 }).notNull(),
  },
  (table) => ({
    longitudeIdx: index('longitude_idx').on(table.longitude),
    latitudeIdx: index('latitude_idx').on(table.latitude),
  })
);
