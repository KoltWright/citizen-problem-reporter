INSERT INTO users
(auth0_id, username)
VALUES(${auth_id}, ${username});

SELECT id FROM users
WHERE auth0_id = ${auth_id};
