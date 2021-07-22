-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
-- join tables--
--workspace_users--
-- two cloumns, one workspace id, one for user id--

DROP TABLE IF EXISTS users;
CREATE TABLE users(users_id VARCHAR, users jsonb);

DROP TABLE IF EXISTS workspace;
CREATE TABLE workspace(workspace_id VARCHAR, users_id VARCHAR, workspace jsonb);
-- json objects--
-- workspace_name--

DROP TABLE IF EXISTS users_workspace;
CREATE TABLE users_workspace(users_id VARCHAR, workspace_id VARCHAR);

DROP TABLE IF EXISTS channel;
CREATE TABLE channel(channel_id VARCHAR, workspace_id VARCHAR, channel jsonb);
-- json objects--
-- channel_name--
-- message--

DROP TABLE IF EXISTS message;
CREATE TABLE message(message_id VARCHAR, channel_id VARCHAR, message jsonb);
-- json objects--
-- from_user--
-- text--

DROP TABLE IF EXISTS directmessage;
CREATE TABLE directmessage(directmessage_id VARCHAR, from_user_id VARCHAR, to_user_id VARCHAR, directmessage jsonb);
--json objects--
--text--
--status--
