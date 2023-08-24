DROP DATABASE IF EXISTS manage_emp;
CREATE DATABASE manage_emp;

USE manage_emp;

CREATE TABLE department (
    id: INT PRIMARY KEY,
    name: VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id: INT PRIMARY KEY,
    title: VARCHAR(30) NOT NULL,
    salary: DECIMAL,
    department_id: INT
);

CREATE TABLE employee (
    id: INT PRIMARY KEY,
    firstName: VARCHAR(30),
    lastName: VARCHAR(30),
    role_id: INT,
    manager_id: INT
);