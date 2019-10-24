const express = require('express');
const app = express();

const { config } = require('./config/index');

const { allowEndPont } = require('./services/allow');

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.get('/json', function(req, res) {
  var ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(',')[0];

  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  console.log('client IP is *********************' + ip + " local: "+ req.headers.origin);
  console.log(req.headers)
  if(allowEndPont(req.headers.origin)){
      res.json({ 
          hola: 'Hello world', 
          remote: req.connection.remoteAddress
        });
  }else{
        res.json({ 
            error: 'Invalid Token', 
            remote: req.connection.remoteAddress
        });
  }
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
