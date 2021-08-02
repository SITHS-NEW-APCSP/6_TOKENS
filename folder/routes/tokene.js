var express = require('express');
var router = express.Router();

//import equivalent
const web = require('jsonwebtoken');

//get .env
const env = require('dotenv');

// get config vars
env.config();

console.log(env.config);

// access config var
const secret = process.env.TOKEN_SECRET;

console.log(process.env.TOKEN_SECRET);

function tokenGen(name){
  return web.sign(name,secret, {expiresIn:'600s'})
}

router.get('', (req, res) => {
  
  const token = tokenGen({ username: 'theFella' });
  console.log('bruh');
  console.log(token);
  res.json(token);
  
});

module.exports = router;