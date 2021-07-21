-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
-- join table--
--workspace_users--
-- two cloumns, one workspace id, one for user id--

DROP TABLE IF EXISTS users;
CREATE TABLE users(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), users jsonb);

DROP TABLE IF EXISTS workspace;
CREATE TABLE workspace(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), workspace jsonb);
--json objects--
--workspace_name--

DROP TABLE IF EXISTS channel;
CREATE TABLE channel(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), workspace_id, channel jsonb);
--json objects--
--channel_name--
--message--

DROP TABLE IF EXISTS message;
CREATE TABLE message(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), channel_id, message jsonb);
--json objects--
--from_user--
--text--

DROP TABLE IF EXISTS directmessage;
CREATE TABLE directmessage(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), from_user, to_user, directmessage jsonb);
--json objects--
--text--
--status--



