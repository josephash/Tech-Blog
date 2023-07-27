DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

USE techblog_db;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email varchar(45) NOT NULL UNIQUE,
  username varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP
)

DROP TABLE IF EXISTS Posts;
CREATE TABLE Posts (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title varchar(45) NOT NULL,
  body text NOT NULL,
  user_id integer NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
  id integer PRIMARY KEY AUTO_INCREMENT,
  body text NOT NULL,
  user_id integer NOT NULL,
  post_id integer NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
)