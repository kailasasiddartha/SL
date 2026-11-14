CREATE DATABASE IF NOT EXISTS ajax_db;
USE ajax_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    phone VARCHAR(15),
    email VARCHAR(100),
    place VARCHAR(50)
);

INSERT INTO users (username, phone, email, place)
VALUES('Alice', '9876543210', 'alice@gmail.com', 'Hyderabad'),
('Bob', '9876543211', 'bob@gmail.com', 'Chennai'),
('Charlie', '9876543212', 'charlie@gmail.com', 'Bangalore'),
('David', '9876543213', 'david@gmail.com', 'Mumbai');
