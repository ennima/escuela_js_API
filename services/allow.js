'use strict';

const endpoints = require('../mocks/endpoints.json');

const allowEndPont = function(end_point_ip) {
  console.log(end_point_ip);
  if (end_point_ip === undefined) {
    console.log('No permitido');
    return false;
  } else {
    const match = endpoints.filter(item => {
      return item === end_point_ip;
    });
    if (match.length > 0) {
      console.log('Permitido :D');
      return true;
    }
  }
};

module.exports = {
  allowEndPont
};
