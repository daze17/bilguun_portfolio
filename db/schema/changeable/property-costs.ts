import { doublePrecision, integer, serial, smallint, timestamp } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

import { propertyListings } from './property-listings';

export const propertyCosts = pgTable('property_costs', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id')
    .notNull()
    .references(() => propertyListings.id)
    .unique(),
  rent: integer('rent'),
  managementFee: integer('management_fee'),
  depositPrice: integer('deposit_price'),
  depositMonth: doublePrecision('deposit_month'),
  gratuityFeePrice: integer('gratuity_fee_price'),
  gratuityFeeMonth: doublePrecision('gratuity_fee_month'),
  securityDepositPrice: integer('security_deposit_price'),
  securityDepositMonth: doublePrecision('security_deposit_month'),
  depositRepaymentFeePrice: integer('deposit_repayment_fee_price'),
  depositRepaymentFeeMonth: doublePrecision('deposit_repayment_fee_month'),
  depositRepaymentFeePercent: doublePrecision('deposit_repayment_fee_percent'),
  renewalFeeAmount: doublePrecision('renewal_fee_amount'),
  renewalFeeTypeCode: integer('renewal_fee_type_code'),
  residenceInsuranceNeeded: smallint('residence_insurance_needed').notNull().default(1),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
