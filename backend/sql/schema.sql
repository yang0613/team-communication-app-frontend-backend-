-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;
CREATE TABLE users(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), users jsonb);

DROP TABLE IF EXISTS workspace;
CREATE TABLE workspace(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), workspace jsonb);
-- join table--
--workspace_users--
-- two cloumns, one workspace id, one for user id--

DROP TABLE IF EXISTS channel;
CREATE TABLE channel(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), workspace id, channel jsonb);
--name--
--message--

DROP TABLE IF EXISTS message;
CREATE TABLE message(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), channel id, message jsonb);

DROP TABLE IF EXISTS directmessage;
CREATE TABLE directmessage(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), from-user, to-user, directmessage jsonb);




