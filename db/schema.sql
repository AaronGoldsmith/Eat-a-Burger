CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	edevoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

