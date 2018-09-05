-- product types

insert into product_type (name) values ('book'), ('music'), ('movie');
select * from product_type;

-- example products

insert into products (title, description, price, imageurl, type) 
values 
	('harry potter', 'some magic and stuff', 19.99, 'harry.jpg', 1),
	('bob marley', 'some reggae and stuff', 9.99, 'bob.jpg', 2),
	('the meg', 'some shark and stuff', 12.99, 'meg.jpg', 3);
    
    
-- GET /products
select * from products;

-- GET /products?q=harry
select * from products where lower(title) like lower('%magic%') or lower(description) like lower('%magic%');


-- POST /products
insert into products (title, description, price, imageurl, type) 
values 
	('harry potter', 'some magic and stuff', 19.99, 'harry.jpg', 1);

-- DELETE /products/123

delete from products where id = 123;
