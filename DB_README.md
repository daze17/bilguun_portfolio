# Property Database - Drizzle ORM + PostgreSQL

This project uses [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL to manage a comprehensive real estate property database.

## 📋 Table of Contents

- [Database Schema Overview](#database-schema-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Scripts](#database-scripts)
- [Schema Structure](#schema-structure)
- [Usage Examples](#usage-examples)

## 🗂️ Database Schema Overview

The database is organized into two main groups:

### **Immutable Property Data** (Physical Characteristics)
Physical property characteristics that rarely change:
- `properties` - Individual room/unit information
- `properties_building` - Building information
- `property_locations` - Geographic coordinates
- `property_routes` - Transportation routes and stations
- `property_translations` - Localized property descriptions

### **Changeable Listing Data** (Rental Information)
Rental listing information that changes over time:
- `property_listings` - Main listing records
- `property_costs` - Pricing and fees
- `property_images` - Property photos
- `property_campaigns` - Marketing campaigns
- `property_dealings` - Transaction types
- `property_advertisement_fees` - Advertisement costs
- `property_advertisement_reprints` - Reprint permissions
- `property_facilities` - Structural facilities (elevator, parking, etc.)
- `property_conditions` - Structural conditions (earthquake-resistant, etc.)
- `property_monthlies` - Monthly rental options

## ✅ Prerequisites

- Node.js 18+ or compatible runtime
- PostgreSQL 12+ database server
- pnpm (or npm/yarn)

## 📦 Installation

The dependencies are already included in this project:

```bash
# Install all dependencies
pnpm install
```

**Key dependencies:**
- `drizzle-orm` - ORM library
- `postgres` - PostgreSQL client
- `drizzle-kit` - Database migration toolkit (dev dependency)

## ⚙️ Configuration

### 1. Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Update the `.env` file with your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_NAME=property_db
DB_SSL=false
```

### 2. Database Setup

Create the PostgreSQL database:

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE property_db;

# Exit psql
\q
```

## 🚀 Database Scripts

The following scripts are available in `package.json`:

```bash
# Generate migration files from schema changes
pnpm db:generate

# Apply migrations to the database
pnpm db:migrate

# Push schema changes directly to the database (development only)
pnpm db:push

# Open Drizzle Studio (visual database browser)
pnpm db:studio
```

### Initial Migration

To set up your database for the first time:

```bash
# Option 1: Use push (quick for development)
pnpm db:push

# Option 2: Use migrations (recommended for production)
pnpm db:generate  # Already done - see db/migrations/
pnpm db:migrate
```

## 🏗️ Schema Structure

### Directory Layout

```
db/
├── schema/
│   ├── immutable/           # Physical property characteristics
│   │   ├── properties.ts
│   │   ├── properties-building.ts
│   │   ├── property-locations.ts
│   │   ├── property-routes.ts
│   │   ├── property-translations.ts
│   │   └── index.ts
│   ├── changeable/          # Rental listing information
│   │   ├── property-listings.ts
│   │   ├── property-costs.ts
│   │   ├── property-images.ts
│   │   ├── property-campaigns.ts
│   │   ├── property-dealings.ts
│   │   ├── property-advertisement-fees.ts
│   │   ├── property-advertisement-reprints.ts
│   │   ├── property-facilities.ts
│   │   ├── property-conditions.ts
│   │   ├── property-monthlies.ts
│   │   └── index.ts
│   └── index.ts             # Main schema export
├── migrations/              # Generated SQL migrations
│   └── 0000_melodic_magma.sql
└── index.ts                 # Database connection
```

### Key Relationships

```
properties_building (1) ──→ (N) properties
properties_building (1) ──→ (N) property_locations
properties_building (1) ──→ (N) property_routes
properties_building (1) ──→ (N) property_translations

properties (1) ──→ (N) property_listings

property_listings (1) ──→ (1) property_costs
property_listings (1) ──→ (N) property_images
property_listings (1) ──→ (N) property_campaigns
property_listings (1) ──→ (N) property_dealings
property_listings (1) ──→ (N) property_advertisement_fees
property_listings (1) ──→ (N) property_advertisement_reprints
property_listings (1) ──→ (N) property_facilities
property_listings (1) ──→ (N) property_conditions
property_listings (1) ──→ (1) property_monthlies
```

## 💻 Usage Examples

### Importing the Database

```typescript
import { db } from './db';
import * as schema from './db/schema';
```

### Query Examples

#### 1. Create a Building

```typescript
import { db } from './db';
import { propertiesBuilding } from './db/schema';

const building = await db.insert(propertiesBuilding).values({
  buildingName: 'Sunrise Apartment',
  buildingTypeCode: 1,
  structureTypeCode: 2,
  builtYear: 2020,
  builtMonth: 6,
  maxFloor: 10,
  prefectureCode: '13', // Tokyo
  cityCode: '13101',
}).returning();
```

#### 2. Create a Property (Room)

```typescript
import { db } from './db';
import { properties } from './db/schema';
import { v4 as uuidv4 } from 'uuid';

const property = await db.insert(properties).values({
  uuid: uuidv4(),
  propertiesBuildingId: building[0].id,
  roomNumber: '301',
  roomSize: 45.5,
  directionCode: 1, // South
  layoutAmount: 2.0,
  layoutTypeCode: 1, // 2LDK
  floor: 3,
}).returning();
```

#### 3. Create a Listing

```typescript
import { db } from './db';
import { propertyListings, propertyCosts } from './db/schema';

// Create listing
const listing = await db.insert(propertyListings).values({
  propertyId: property[0].id,
  publishedAt: new Date(),
  availableMoveInTimingCode: 1,
  isActive: 1,
  storeId: 1,
}).returning();

// Create associated costs
await db.insert(propertyCosts).values({
  listingId: listing[0].id,
  rent: 120000,
  managementFee: 8000,
  depositPrice: 120000,
  depositMonth: 1.0,
  gratuityFeePrice: 120000,
  gratuityFeeMonth: 1.0,
  residenceInsuranceNeeded: 1,
});
```

#### 4. Query with Relations

```typescript
import { db } from './db';
import { eq } from 'drizzle-orm';
import { properties, propertiesBuilding, propertyListings } from './db/schema';

// Get all active listings with property and building info
const listings = await db
  .select()
  .from(propertyListings)
  .innerJoin(properties, eq(propertyListings.propertyId, properties.id))
  .innerJoin(propertiesBuilding, eq(properties.propertiesBuildingId, propertiesBuilding.id))
  .where(eq(propertyListings.isActive, 1));
```

#### 5. Search Properties by Location

```typescript
import { db } from './db';
import { sql, and, between } from 'drizzle-orm';
import { propertyLocations, propertiesBuilding } from './db/schema';

// Find properties within a geographic area
const nearbyProperties = await db
  .select()
  .from(propertyLocations)
  .innerJoin(
    propertiesBuilding,
    eq(propertyLocations.propertiesBuildingId, propertiesBuilding.id)
  )
  .where(
    and(
      between(propertyLocations.latitude, sql`35.6`::numeric, sql`35.7`),
      between(propertyLocations.longitude, sql`139.6`, sql`139.7`)
    )
  );
```

#### 6. Get Listing with All Details

```typescript
import { db } from './db';
import { eq } from 'drizzle-orm';
import {
  propertyListings,
  propertyCosts,
  propertyImages,
  properties,
  propertiesBuilding,
} from './db/schema';

const listingId = 1;

const listingDetails = await db
  .select()
  .from(propertyListings)
  .innerJoin(properties, eq(propertyListings.propertyId, properties.id))
  .innerJoin(propertiesBuilding, eq(properties.propertiesBuildingId, propertiesBuilding.id))
  .leftJoin(propertyCosts, eq(propertyListings.id, propertyCosts.listingId))
  .where(eq(propertyListings.id, listingId));
```

### Using Drizzle Studio

Drizzle Studio provides a visual interface to browse and edit your database:

```bash
pnpm db:studio
```

This will open a web interface at `https://local.drizzle.studio` where you can:
- Browse all tables and data
- Run queries visually
- Edit records
- View relationships

## 🔄 Making Schema Changes

1. **Modify schema files** in `db/schema/`
2. **Generate migration**:
   ```bash
   pnpm db:generate
   ```
3. **Review the generated SQL** in `db/migrations/`
4. **Apply migration**:
   ```bash
   pnpm db:migrate
   ```

## 📚 Additional Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Drizzle PostgreSQL Guide](https://orm.drizzle.team/docs/get-started-postgresql)
- [Drizzle Kit Documentation](https://orm.drizzle.team/kit-docs/overview)

## 🎯 Design Principles

This schema follows a clear separation of concerns:

1. **Immutable Data**: Physical property characteristics are stored separately and referenced by listings
2. **Temporal Listings**: Multiple listings can exist for the same property over time
3. **Flexibility**: Costs, images, and marketing data can change per listing
4. **Indexed Searches**: Key fields are indexed for fast queries (location, stations, etc.)

---

**Note**: This database schema is optimized for real estate rental platforms with support for multiple languages, flexible pricing, and comprehensive property information.
