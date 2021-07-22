const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const secrets = require('../sql/secrets.json');
const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;
  let select = `SELECT * FROM users WHERE users->>'email' = $1`;
  const query = {
    text: select,
    values: [email],
  };

  const {rows} = await pool.query(query);
  const users_id = rows[0].users_id;
  const user = rows[0].users;
  const match = bcrypt.compareSync(password, user.password);

  if (user && match) {
    const accessToken = jwt.sign(
      {email: user.email, role: user.role, id: users_id}, 
      secrets.accessToken, {
        expiresIn: '30m',
        algorithm: 'HS256'
      });
    res.status(200).json({name: user.name, accessToken: accessToken});
  } else {
    res.status(401).send('Username or password incorrect');
  }
};

exports.check = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secrets.accessToken, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};