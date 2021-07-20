-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS users;
CREATE TABLE users(email VARCHAR(32), users jsonb);