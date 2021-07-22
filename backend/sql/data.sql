-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM users;
INSERT INTO users(users_id, users) VALUES ('bf7187d8-155a-4de3-a745-65873b213e36','{"email": "anna@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze","role": "admin","name": "Anna Admin"}');
INSERT INTO users(users_id, users) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y","role": "member","name": "Molly Member"}');

DELETE FROM workspace;
--anna CSE183 CSE140--
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('d213d330-a8a3-4dcf-a4c1-91e9e4053457','bf7187d8-155a-4de3-a745-65873b213e36','{"name":"CSE183 Summer 2021"}');
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('b686b462-736a-41d0-92dd-6a1ca01c8fd2','bf7187d8-155a-4de3-a745-65873b213e36','{"name":"CSE140 Summer 2021"}');
--molly CSE101 CSE102--
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('bd541ecc-5f56-40ee-b0a8-271fd46887b1','5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"name":"CSE101 Fall 2020"}');
INSERT INTO workspace(workspace_id, users_id, workspace) VALUES ('2fa6ef81-0af6-4b00-b02c-641f01c994ea','5f1c95b1-50e0-4904-bd79-b2e155a318c1','{"name":"CSE102 Fall 2020"}');

-- DELETE FROM users_workspace;
-- INSERT INTO users_workspace(users_id, workspace_id) VALUES ('5f1c95b1-50e0-4904-bd79-b2e155a318c1','d213d330-a8a3-4dcf-a4c1-91e9e4053457');
-- INSERT INTO users_workspace(users_id, workspace_id) VALUES ('bf7187d8-155a-4de3-a745-65873b213e36','d213d330-a8a3-4dcf-a4c1-91e9e4053457');

DELETE FROM channel;
--CSE 183--
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('09186a40-4b16-4051-a8c9-07a644e72f6f','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 1"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('30a614a1-f540-40af-9313-020f4ab4a7f9','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 2"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('e690d1c3-5042-494e-bcbe-42bd9a6b9adb','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 3"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('2e6478bc-cecc-4dea-9cf2-433027d4f145','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"Assignment 4"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('d4c3bfcf-d799-4d55-bbd9-9a8eb43db377','d213d330-a8a3-4dcf-a4c1-91e9e4053457','{"name":"General"}');
--CSE 140--
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('ed503c47-bca9-4c3d-ae9c-38113d309580','b686b462-736a-41d0-92dd-6a1ca01c8fd2','{"name":"Project 1"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('88c95ea7-9dd5-4d61-9fb6-c8dd75c1afcb','b686b462-736a-41d0-92dd-6a1ca01c8fd2','{"name":"Project 2"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('d1946786-f2a9-4101-aa6e-bc1d78c17a73','b686b462-736a-41d0-92dd-6a1ca01c8fd2','{"name":"Project 3"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('0730b5f9-759f-4a9a-9e89-a923646183fb','b686b462-736a-41d0-92dd-6a1ca01c8fd2','{"name":"Project 4"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('8ae7934a-b4ec-46f4-ba97-73bcc7fc43f1','b686b462-736a-41d0-92dd-6a1ca01c8fd2','{"name":"General"}');
--CSE 101--
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('d2f55f30-28f8-4859-90df-ed376fd3bad1','bd541ecc-5f56-40ee-b0a8-271fd46887b1','{"name":"Lab 1"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('3031f349-5a0d-4a17-819b-1a8df32d0c38','bd541ecc-5f56-40ee-b0a8-271fd46887b1','{"name":"Lab 2"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('b99b15b8-a4d6-4a93-8946-3d2247ac7cab','bd541ecc-5f56-40ee-b0a8-271fd46887b1','{"name":"Lab 3"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('c8a266e8-42d2-4fea-a910-72eabda35324','bd541ecc-5f56-40ee-b0a8-271fd46887b1','{"name":"Lab 4"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('13217716-6018-4239-88f7-a41ff81cf8f8','bd541ecc-5f56-40ee-b0a8-271fd46887b1','{"name":"General"}');
--CSE 102--
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('d2b9f0b2-5027-407e-a17e-6655dee6d9a3','2fa6ef81-0af6-4b00-b02c-641f01c994ea','{"name":"Quiz 1"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('ed26ee7c-2ba2-4c81-b837-dd591bedc7e6','2fa6ef81-0af6-4b00-b02c-641f01c994ea','{"name":"Quiz 2"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('c00858cf-9bd1-4db7-a00c-c259280d1a12','2fa6ef81-0af6-4b00-b02c-641f01c994ea','{"name":"Quiz 3"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('6a680ac6-992f-4dd3-81ab-6045d0b09a6e','2fa6ef81-0af6-4b00-b02c-641f01c994ea','{"name":"Quiz 4"}');
INSERT INTO channel(channel_id, workspace_id, channel) VALUES ('80662a62-2e5f-444c-b3b3-0dc323cac826','2fa6ef81-0af6-4b00-b02c-641f01c994ea','{"name":"General"}');

