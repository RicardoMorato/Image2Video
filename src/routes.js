const express = require('express');

const proc = require('./videoController');

const routes = express.Router();

routes.get('/', (req, res) => {
  proc();
  res.json({
    Status: 'Development',
    Author: 'Ricardo Morato Rocha'
  });
})

module.exports = routes
