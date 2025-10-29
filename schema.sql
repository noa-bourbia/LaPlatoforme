-- Supabase/PostgreSQL schema for Restaurant Connect (MVP)

create type order_type as enum ('dine_in','takeaway');
create type order_status as enum ('pending','preparing','ready','served','cancelled');
create type payment_status as enum ('unpaid','paid','later');
create type table_status as enum ('free','active');
create type user_role as enum ('admin','server','kitchen');

create table if not exists tables (
  id uuid primary key default gen_random_uuid(),
  number text not null,
  qr_url text,
  capacity int,
  status table_status default 'free'
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  price numeric not null check (price >= 0),
  available boolean default true,
  description text,
  image_url text,
  allergens text[] default '{}'
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  type order_type not null,
  table_id uuid references tables(id) on delete set null,
  status order_status not null default 'pending',
  total numeric not null default 0,
  payment_status payment_status not null default 'unpaid',
  pickup_slot timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  qty int not null check (qty > 0),
  note text
);

create table if not exists users (
  id uuid primary key,
  email text unique,
  name text,
  role user_role not null default 'server',
  created_at timestamptz not null default now()
);

-- Stats view example
create view stats_daily as
select
  date_trunc('day', created_at) as day,
  count(*) as orders_count,
  sum(total) as revenue
from orders
group by 1
order by 1 desc;
