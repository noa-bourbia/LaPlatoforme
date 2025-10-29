-- Example seed data

insert into tables (number, capacity, status) values
('1', 2, 'free'), ('2', 4, 'free'), ('3', 4, 'free');

insert into products (name, category, price, description, allergens) values
('Burger Maison','Plats',12.90,'Boeuf, cheddar, sauce maison', '{gluten, lactose}'),
('Salade César','Entrées',8.50,'Poulet, parmesan, croûtons','{gluten, lactose}'),
('Tiramisu','Desserts',6.00,'Classique cacao','{lactose}'),
('Coca-Cola','Boissons',3.00,'33cl','{}');
