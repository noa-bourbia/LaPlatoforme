-- RLS Policies (to adapt in Supabase SQL editor)

alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table tables enable row level security;
alter table users enable row level security;

-- PUBLIC: read-only products
create policy "public read products"
on products for select
to anon, authenticated
using (available = true);

-- ADMIN: full CRUD on products
create policy "admin manage products"
on products for all
to authenticated
using (auth.jwt() ->> 'role' = 'admin')
with check (auth.jwt() ->> 'role' = 'admin');

-- ORDERS: insert by staff
create policy "staff insert orders"
on orders for insert
to authenticated
with check (auth.jwt() ->> 'role' in ('admin','server','kitchen'));

-- ORDERS: select by staff
create policy "staff select orders"
on orders for select
to authenticated
using (auth.jwt() ->> 'role' in ('admin','server','kitchen'));

-- ORDERS: update status by role
create policy "kitchen update to preparing_ready_served"
on orders for update
to authenticated
using (auth.jwt() ->> 'role' = 'kitchen')
with check (status in ('preparing','ready','served'));

create policy "server update to served_cancelled"
on orders for update
to authenticated
using (auth.jwt() ->> 'role' = 'server')
with check (status in ('served','cancelled'));

-- ORDER_ITEMS: insert/select by staff
create policy "staff manage order_items"
on order_items for all
to authenticated
using (auth.jwt() ->> 'role' in ('admin','server','kitchen'))
with check (auth.jwt() ->> 'role' in ('admin','server','kitchen'));

-- TABLES: select by staff
create policy "staff select tables"
on tables for select
to authenticated
using (auth.jwt() ->> 'role' in ('admin','server','kitchen'));

-- USERS: admin read
create policy "admin read users"
on users for select
to authenticated
using (auth.jwt() ->> 'role' = 'admin');
