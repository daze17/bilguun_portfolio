import { index, integer, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertiesBuilding } from './properties-building';

export const propertyRoutes = pgTable(
  'property_routes',
  {
    id: serial('id').primaryKey(),
    propertiesBuildingId: integer('properties_building_id')
      .notNull()
      .references(() => propertiesBuilding.id),
    stationCode: varchar('station_code', { length: 255 }),
    stationId: integer('station_id').notNull(),
    railroadCode: varchar('railroad_code', { length: 255 }).notNull(),
    transportationTypeCode: integer('transportation_type_code').notNull(),
    minutes: integer('minutes').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => ({
    stationCodeIdx: index('station_code_idx').on(table.stationCode),
    stationIdIdx: index('station_id_idx').on(table.stationId),
  })
);
