-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(email, users) VALUES ('molly@books.com','{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y","role": "member","name": "Molly Member"}');
INSERT INTO users(email, users) VALUES ('anna@books.com','{"email": "anna@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze","role": "admin","name": "Anna Admin"}');