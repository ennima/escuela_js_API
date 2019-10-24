const express = require('express');
const app = express();

const { config } = require('./config/index');
const { usersApi } = require('./routes/users');



app.get('/', function(req, res) {
  res.send('Hello world');
});

usersApi(app);
app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
