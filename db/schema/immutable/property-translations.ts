import { integer, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertiesBuilding } from './properties-building';

export const propertyTranslations = pgTable('property_translations', {
  propertiesBuildingId: integer('properties_building_id')
    .notNull()
    .references(() => propertiesBuilding.id),
  locale: varchar('locale', { length: 255 }).notNull(),
  addressDetail: varchar('address_detail', { length: 255 }),
  remarks: text('remarks'),
  sideNote: text('side_note'),
  catchphrase: text('catchphrase'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
