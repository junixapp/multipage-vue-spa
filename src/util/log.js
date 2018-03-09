'use strict'

function log(s) {
  if(process.env.NODE_ENV !== 'production'){
    console.log(s);
  }
}

module.exports = log
