import { char, doublePrecision, integer, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertiesBuilding } from './properties-building';

export const properties = pgTable('properties', {
  id: serial('id').primaryKey(),
  uuid: char('uuid', { length: 36 }).notNull().unique(),
  propertiesBuildingId: integer('properties_building_id')
    .notNull()
    .references(() => propertiesBuilding.id),
  roomNumber: varchar('room_number', { length: 255 }),
  roomSize: doublePrecision('room_size'),
  directionCode: integer('direction_code'),
  layoutAmount: doublePrecision('layout_amount').notNull(),
  layoutTypeCode: integer('layout_type_code').notNull(),
  floor: integer('floor'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
