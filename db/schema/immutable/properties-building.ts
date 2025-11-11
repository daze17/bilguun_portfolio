import { index, integer, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const propertiesBuilding = pgTable(
  'properties_building',
  {
    id: serial('id').primaryKey(),
    buildingName: varchar('building_name', { length: 255 }).notNull(),
    buildingTypeCode: integer('building_type_code').notNull(),
    structureTypeCode: integer('structure_type_code').notNull(),
    builtYear: integer('built_year'), // Using integer for year type
    builtMonth: integer('built_month'),
    maxFloor: integer('max_floor'),
    prefectureCode: varchar('prefecture_code', { length: 255 }).notNull(),
    cityCode: varchar('city_code', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => ({
    prefectureCodeIdx: index('prefecture_code_idx').on(table.prefectureCode),
    cityCodeIdx: index('city_code_idx').on(table.cityCode),
  })
);
