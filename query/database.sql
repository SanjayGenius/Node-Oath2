CREATE TABLE IF NOT EXISTS users (user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(45) NOT NULL, user_password VARCHAR(45) NOT NULL, PRIMARY KEY (user_id)) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS access_tokens ( access_tokens_id INT NOT NULL AUTO_INCREMENT, access_token VARCHAR(60) NOT NULL, user_id INT NOT NULL, INDEX fk_access_tokens_users_idx (user_id ASC),
 PRIMARY KEY (access_tokens_id), CONSTRAINT fk_access_tokens_users FOREIGN KEY (user_id) 
 REFERENCES users (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE = INNODB;