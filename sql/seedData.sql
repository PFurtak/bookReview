INSERT INTO books
    (title, author, publish_year, category)
VALUES
    ('The 4-Hour Work Week', 'Timothy Ferris', 2007, 'Self-Help'),
    ('The Shining', 'Stephen King', 1977, 'Thriller'),
    ('Dream Catcher', 'Stephen King', 2001, 'Thriller'),
    ('Tools of Titans', 'Timothy Ferris', 2016, 'Self-Help'),
    ('Computer Science Distilled', 'Wladston Ferreira Filho', 2017, 'Educational');

INSERT INTO users
    (first_name, last_name, username, email)
VALUES
    ('Dustin', 'Meyers', 'popcornfan1985', 'dmeyers@aol.com'),
    ('Gordy', 'Birddiv', 'hotdogsammich1989', 'gordy@gmail.com'),
    ('Absolutely', 'Notdustin', 'coronapopcontrol', 'notdustin@gmail.com');

INSERT INTO reviews
    (reviewerid, stars, revtitle, review, bookid)
VALUES
    (1, 5, 'New perspective', 'This book really changed my way of thinking about work life balance.', 1),
    (1, 5, 'Classic.', 'One of Stephens Best', 2),
    (2, 3, 'It was OK', 'Felt like this dragged on at times.', 3),
    (3, 5, 'Awesome', 'Great to learn from people with proven track records.', 4);