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

DELETE FROM message;
--CSE 183--
INSERT INTO message(message_id, channel_id, message) VALUES ('5aecd140-eab0-11eb-9a03-0242ac130003','09186a40-4b16-4051-a8c9-07a644e72f6f','{"name":"Bob Dylan", "time": "2021-07-10", "text": "How many roads must a man walk down?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('29a1a19b-55f5-4f87-823a-c13cbbb80d96','30a614a1-f540-40af-9313-020f4ab4a7f9','{"name":"Logan Thompson", "time": "2021-07-10", "text": "I hope I get this assignment done in time."}');
INSERT INTO message(message_id, channel_id, message) VALUES ('4ca0809d-1d68-41b8-924f-97aaecc27dfb','e690d1c3-5042-494e-bcbe-42bd9a6b9adb','{"name":"Jessica Higgins", "time": "2021-07-11", "text": "I hope you had fun at the park."}');
INSERT INTO message(message_id, channel_id, message) VALUES ('2db3631d-0be1-4cc6-86b5-03d2733cd332','2e6478bc-cecc-4dea-9cf2-433027d4f145','{"name":"Dr Harrison", "time": "2021-07-12", "text": "If this assignment is late, you get an F"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('4c46e3e8-8783-472f-accf-285dac9c905e','d4c3bfcf-d799-4d55-bbd9-9a8eb43db377','{"name":"Carl Carlson", "time": "2021-07-13", "text": "What classes are you taking?"}');
--CSE 140--
INSERT INTO message(message_id, channel_id, message) VALUES ('a10199ce-7812-4391-a2db-810d50feb7a1','ed503c47-bca9-4c3d-ae9c-38113d309580','{"name":"Meek Mill", "time": "2021-07-10", "text": "Are you living on campus?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('11e1611c-90f7-49e9-9527-eb2ace8c38cb','88c95ea7-9dd5-4d61-9fb6-c8dd75c1afcb','{"name":"Rick Sanchez", "time": "2021-07-10", "text": "Do you watch Rick and Morty?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('2083a12c-bb28-438b-8cf3-915cb814fc92','d1946786-f2a9-4101-aa6e-bc1d78c17a73','{"name":"Logan Thompson", "time": "2021-07-11", "text": "Is anyone else taking CSE183 right now?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('0b9c28bf-1bd1-426b-b6c3-c31762d905ad','0730b5f9-759f-4a9a-9e89-a923646183fb','{"name":"Rachel Munn", "time": "2021-07-12", "text": "Does anyone know how to do number two?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('cd37d3d4-ac9d-4274-ba9c-56438f97b444','8ae7934a-b4ec-46f4-ba97-73bcc7fc43f1','{"name":"Dayton Oldham", "time": "2021-07-13", "text": "Anyone down to go to a party?"}');
--CSE 101--
INSERT INTO message(message_id, channel_id, message) VALUES ('f970246b-2eec-4142-81f9-5204725f0e0f','d2f55f30-28f8-4859-90df-ed376fd3bad1','{"name":"Ian Collis", "time": "2021-07-10", "text": "When is the next quiz?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('540ad403-1ec6-4a87-a3eb-da2a96390179','3031f349-5a0d-4a17-819b-1a8df32d0c38','{"name":"Maurissa Brown", "time": "2021-07-10", "text": "Has anyone taken Dr. Harrison?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('c05142d6-5725-403c-ab9c-f3d8ef4d1e27','b99b15b8-a4d6-4a93-8946-3d2247ac7cab','{"name":"Mario Moreno", "time": "2021-07-11", "text": "When is the next office hours?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('eafccf04-f45d-4038-a96c-2c1aa62c538a','c8a266e8-42d2-4fea-a910-72eabda35324','{"name":"Karina Nolasco", "time": "2021-07-12", "text": "What was the answer to the last question on the test?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('abbe91a0-7029-4b24-9915-1be7e0212ab8','13217716-6018-4239-88f7-a41ff81cf8f8','{"name":"Justin Singh", "time": "2021-07-13", "text": "I cant wait until summer vacation."}');
--CSE 102--
INSERT INTO message(message_id, channel_id, message) VALUES ('b6d33d12-7a68-4de7-95f1-a31f1eb24e6c','d2b9f0b2-5027-407e-a17e-6655dee6d9a3','{"name":"Cade Brecht", "time": "2021-07-10", "text": "What is this class about?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('34876185-484e-4641-b363-1fbaf784a32c','ed26ee7c-2ba2-4c81-b837-dd591bedc7e6','{"name":"Brandon Faulks", "time": "2021-07-10", "text": "Does anyone know where to find the syllabus?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('bfd8b2ea-98ff-4f29-a521-f6bdbc747cce','c00858cf-9bd1-4db7-a00c-c259280d1a12','{"name":"Liam Smoody", "time": "2021-07-11", "text": "Is attendence mandatory?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('722563d0-ff94-46ec-8f66-fa2d44aec609','6a680ac6-992f-4dd3-81ab-6045d0b09a6e','{"name":"Zach Paxton", "tim": "2021-07-12", "text": "Did you do the extra credit?"}');
INSERT INTO message(message_id, channel_id, message) VALUES ('7ebf473f-4448-47fe-8d91-526a98ccf67d','80662a62-2e5f-444c-b3b3-0dc323cac826','{"name":"Josh Hofman", "time": "2021-07-13", "text": "Where can I find a UUID generator?"}');

DELETE FROM directmessage;
--Anna Admin--
INSERT INTO directmessage(directmessage_id, from_user_id, to_user_id, directmessage) VALUES ('be761cf8-a560-4da3-8ef2-f202045a2a90', '5f1c95b1-50e0-4904-bd79-b2e155a318c1', 'bf7187d8-155a-4de3-a745-65873b213e36', '{"name":"Molly Member", "status":"online", "time":"2021-07-10", "directmessage_id":"be761cf8-a560-4da3-8ef2-f202045a2a90", "message":"Want to go see a movie?"}');
--Molly Member--
INSERT INTO directmessage(directmessage_id, from_user_id, to_user_id, directmessage) VALUES ('de7769aa-9b4d-44da-9ba0-8b3997982af1', 'bf7187d8-155a-4de3-a745-65873b213e36', '5f1c95b1-50e0-4904-bd79-b2e155a318c1', '{"name":"Anna Admin", "status":"offline", "time":"2021-07-11", "directmessage_id":"de7769aa-9b4d-44da-9ba0-8b3997982af1", "message":"Yes, lets go tomorrow!"}');
