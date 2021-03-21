use burgers_db;

-- Write insert queries to populate the `burgers` table 
-- with at least three entries.

Insert into burgers (burger_name, devoured)
values ("BLT burger", true),
("Happy meal burger", true),
("Giant burger", true);

select * from burgers;