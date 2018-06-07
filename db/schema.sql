-- Create My SQL Table here
-- Create a database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
-- use burgers_db
USE DATABASE burgers_db;

-- Create a table for burgers_db, include id, burger name, devoured(boolean),
 -- and a primary key.
CREATE table burgers_db (
id INT(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(40) NOT NULL,
devoured BOOLEAN NOT NULL default 'TRUE',

PRIMARY KEY(id) NOT NULL
);
