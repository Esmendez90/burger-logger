-- Write SQL queries that do the following:

drop database if exists burgers_db;
--    * Create the `burgers_db`.
create database burgers_db;
--    * Switch to or use the `burgers_db`.
use burgers_db;

--    * Create a `burgers` table with these fields:
create table burgers (
--    * **id**: an auto incrementing int that serves as the primary key.
id int auto_increment,
--    * **burger_name**: a string.
burger_name varchar(30),
--    * **devoured**: a boolean.
devoured boolean DEFAULT false,

PRIMARY KEY (id)
);