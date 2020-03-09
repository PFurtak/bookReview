CREATE DATABASE bookreview;

CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    publish_year INT,
    category TEXT
);


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR

);

CREATE TABLE reviews
(
    id SERIAL PRIMARY KEY,
    reviewerID INT REFERENCES users (id),
    stars INT CHECK (stars <= 6),
    revtitle VARCHAR,
    review VARCHAR,
    bookid INT REFERENCES books (id)

);