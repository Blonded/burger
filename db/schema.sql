-- Create My SQL Table here
-- -- Create a database
-- DROP DATABASE IF EXISTS burger_db;
-- CREATE DATABASE burger_db;
-- -- use burgers_db
-- USE burger_db;
--
-- -- Create a table for burgers_db, include id, burger name, devoured(boolean),
--  -- and a primary key.
-- CREATE TABLE burgerInfo (
--     id INT(10) AUTO_INCREMENT NOT NULL,
--     burger_id VARCHAR(40) NOT NULL,
--     burger_name VARCHAR(40) NOT NULL,
--     hungry BOOLEAN DEFAULT false,
--
--     PRIMARY KEY(id)
--   );

--

----
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
-- use burgers_db
USE burger_db;

-- Create a table for burgers_db, include id, burger name, devoured(boolean),
 -- and a primary key.
CREATE TABLE burgerInfo (
    id INT(10) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(40) NOT NULL,
    hungry BOOLEAN DEFAULT false,

    PRIMARY KEY(id)
  );
