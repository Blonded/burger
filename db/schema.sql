-- Create My SQL Table here
-- Create a database
DROP DATABASE IF EXISTS burgerz_db;
CREATE DATABASE burgerz_db;
-- use burgers_db
USE burgerz_db;

-- Create a table for burgers_db, include id, burger name, devoured(boolean),
 -- and a primary key.
CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
  );


  INSERT INTO burgers (burger_name, devoured)
  VALUES
      ('Double Double Burger', false),
      ('Cheese and Bacon Burger', false),
      ('Vegan Burger', false),
      ('Fried Egg Burger', false);
