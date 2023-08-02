const isOdd = require('is-odd')

module.exports.helloWorld = (event, context, callback) => {
  const checkingIsOdd = isOdd('3')

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: `I've just checking "3" with "isOdd": ${checkingIsOdd}`,
      input: event,
    }),
  };

  callback(null, response);
};
