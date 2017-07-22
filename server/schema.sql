CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int NOT NULL UNIQUE AUTO_INCREMENT,
  PRIMARY KEY (ID),
  username char(25) DEFAULT 'annonymous' UNIQUE
);

CREATE TABLE rooms (
  ID int NOT NULL UNIQUE AUTO_INCREMENT,
  PRIMARY KEY (ID),
  roomname char(25) DEFAULT 'lobby' UNIQUE
);

CREATE TABLE messages (
  /* Describe your table here.*/
  /* table with id, text, createdAt and foreign keys username and roomname*/
  ID int NOT NULL UNIQUE AUTO_INCREMENT, 
  Text char(140) NULL,
  CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  username int,
  roomname int,
  FOREIGN KEY (username) REFERENCES users(ID),
  FOREIGN KEY (roomname) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */

/* https://dev.mysql.com/doc/refman/5.7/en/drop-table.html */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

