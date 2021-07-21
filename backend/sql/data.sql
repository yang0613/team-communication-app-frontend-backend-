-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(users_id, users) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y","role": "member","name": "Molly Member"}');
INSERT INTO users(users_id, users) VALUES ('bf7187d8-155a-4de3-a745-65873b213e36','{"email": "anna@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze","role": "admin","name": "Anna Admin"}');

DELETE FROM workspace;
INSERT INTO workspace(workspace_id, workspace) VALUES ('d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"CSE183 Summer 2021"}');

DELETE FROM users_workspace;
INSERT INTO users_workspace(users_id, workspace_id) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','d213d330-a8a3-4dcf-a4c1-91e9e4053457');
-- DELETE FROM channel;
-- INSERT INTO channel(channel) VALUES ('{"name":"Assignment 1"}');
-- INSERT INTO channel(channel) VALUES ('{"name":"Assignment 2"}');
-- INSERT INTO channel(channel) VALUES ('{"name":"Assignment 3"}');
-- INSERT INTO channel(channel) VALUES ('{"name":"Assignment 4"}');
-- INSERT INTO channel(channel) VALUES ('{"name":"General"}');


