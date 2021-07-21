-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(users_id, users) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y","role": "member","name": "Molly Member"}');
INSERT INTO users(users_id, users) VALUES ('bf7187d8-155a-4de3-a745-65873b213e36','{"email": "anna@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze","role": "admin","name": "Anna Admin"}');

DELETE FROM workspace;
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('d213d330-a8a3-4dcf-a4c1-91e9e4053457','5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"name":"CSE183 Summer 2021"}');
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('d213d330-a8a3-4dcf-a4c1-91e9e4053457','bf7187d8-155a-4de3-a745-65873b213e36','{"name":"CSE183 Summer 2021"}');

-- DELETE FROM users_workspace;
-- INSERT INTO users_workspace(users_id, workspace_id) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','d213d330-a8a3-4dcf-a4c1-91e9e4053457');
-- INSERT INTO users_workspace(users_id, workspace_id) VALUES ('bf7187d8-155a-4de3-a745-65873b213e36','d213d330-a8a3-4dcf-a4c1-91e9e4053457');

DELETE FROM channel;
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('09186a40-4b16-4051-a8c9-07a644e72f6f','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 1"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('30a614a1-f540-40af-9313-020f4ab4a7f9','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 2"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('e690d1c3-5042-494e-bcbe-42bd9a6b9adb','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 3"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('2e6478bc-cecc-4dea-9cf2-433027d4f145','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 4"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('d4c3bfcf-d799-4d55-bbd9-9a8eb43db377','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"General"}');


