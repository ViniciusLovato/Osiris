module.exports = { 
  'extends': [
    'airbnb-base',
  ], 
  'env': {
    'node': true,
    'mocha': true, 
  },
  'globals': {
    'browser': true,
  },
  'rules':{
    // Allow dangling underscores
    // http://eslint.org/docs/rules/no-underscore-dangle
    // mongodb _ids
    'no-underscore-dangle': [0],
  }
}