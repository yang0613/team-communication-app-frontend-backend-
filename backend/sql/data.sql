-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(users) VALUES ('{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y","role": "member","name": "Molly Member"}');
INSERT INTO users(users) VALUES ('{"email": "anna@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze","role": "admin","name": "Anna Admin"}');

DELETE FROM workspace;
INSERT INTO workspace(workspace) VALUES ('{"name":"CSE183 Summer 2021"}');

DELETE FROM channel;
INSERT INTO channel(workspace_id, channel) VALUES ('{"name":"Assignment 1"}');
INSERT INTO channel(workspace_id, channel) VALUES ('{"name":"Assignment 2"}');
INSERT INTO channel(workspace_id, channel) VALUES ('{"name":"Assignment 3"}');
INSERT INTO channel(workspace_id, channel) VALUES ('{"name":"Assignment 4"}');
INSERT INTO channel(workspace_id, channel) VALUES ('{"name":"General"}');


