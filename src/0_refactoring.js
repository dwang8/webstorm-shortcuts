'use strict';

/**
 * extract as constant
 * rename variable
 * accept webstorm return inline suggestion
 */
function exercise1(foo) {
  const obj = {
    hello1: 'world',
    hello2: 'world',
    hello3: 'world',
    hello4: 'world',
  };
  return obj;
}

//rename file to '0_refactor.js'

module.exports = { exercise1 };
