var tv4 = require('tv4');

module.exports.validate = function(proposed, schema) {
  return tv4.validate(proposed, schema);
};