## connect to the mysql server
mysql -h 127.0.0.1 -u root -plpomi;

SHOW DATABASES;

## create the database companydb
CREATE DATABASE IF NOT EXISTS companydb;

## the database name is companydb
## the table name is employee

USE companydb;

SHOW TABLES;

## create the table employee

CREATE TABLE employee (
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    salary INT(5) DEFAULT NULL
);


DESCRIBE employee;


## bin hier


## insert data into the table employee with id


SHOW DATABASES;

USE companydb;

SHOW TABLES;
SELECT * from employee;


INSERT INTO employee(name, salary ) VALUES (1,'Lpomi', 2000);

# or with more data at onece

INSERT INTO employee VALUES
    (1,'Lpomi', 2000),
    (2,'Huck',2300),
    (3,'Mak',1300),
    (4,'Joao',1200);

SELECT * from employee;



