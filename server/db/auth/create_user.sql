INSERT INTO users311
(auth0_id, username)
VALUES(${auth_id}, ${username});

SELECT id FROM users311
WHERE auth0_id = ${auth_id};
