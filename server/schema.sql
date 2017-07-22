DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int NOT NULL UNIQUE AUTO_INCREMENT,
  PRIMARY KEY (ID),
  username char(25) DEFAULT 'annonymous' UNIQUE
);

CREATE TABLE messages (
  /* Describe your table here.*/
  /* table with id, text, createdAt and foreign keys username and roomname*/
  ID int NOT NULL UNIQUE AUTO_INCREMENT, 
  text char(140) NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  username int,
  roomname char(25) DEFAULT 'lobby',
  FOREIGN KEY (username) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */

/* https://dev.mysql.com/doc/refman/5.7/en/drop-table.html 
DROP TABLE <table-name>
*/



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

