-- Task 7 Database Schema
CREATE DATABASE IF NOT EXISTS userdatabasenew;
USE userdatabasenew;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);