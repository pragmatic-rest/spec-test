var tv4 = require('tv4');

module.exports.validate = function(proposed, schema) {
  var res = tv4.validate(proposed, schema);

  if(!res) {
    console.error('spec-test validate error: \n' + JSON.stringify(tv4.error, null, 2));
  }

  return res;
};