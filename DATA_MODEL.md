# Modèle de données (Supabase/PostgreSQL)

## Tables (MVP)

### tables
- id (uuid, pk)
- number (text)
- qr_url (text)
- capacity (int)
- status (enum: free, active)

### products
- id (uuid, pk)
- name (text)
- category (text)
- price (numeric)
- available (bool)
- description (text)
- image_url (text)
- allergens (text[])

### orders
- id (uuid, pk)
- type (enum: dine_in, takeaway)
- table_id (uuid, fk nullable)
- status (enum: pending, preparing, ready, served, cancelled)
- total (numeric)
- payment_status (enum: unpaid, paid, later)
- pickup_slot (timestamptz, nullable)
- created_at (timestamptz, default now())

### order_items
- id (uuid, pk)
- order_id (uuid, fk)
- product_id (uuid, fk)
- qty (int)
- note (text)

### users (staff/admin only)
- id (uuid, pk)
- email (text, unique)
- name (text)
- role (enum: admin, server, kitchen)
- created_at

## Index & vues
- Index sur `orders.created_at`, `orders.status`.
- Vue `stats_daily` (CA, nb commandes, temps moyen).

## Realtime channels
- `realtime:orders`
- `realtime:order_items`

## RLS – principes
- Public: lecture `products`, pas d’écriture.
- Staff: écriture `orders`, `order_items`, update status selon rôle.
- Kitchen: update status preparing/ready/served.
- Admin: CRUD total.
(voir `SECURITY.md` pour les policies)
