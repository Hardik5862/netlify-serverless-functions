// domain/.netlify/functions/hello

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: "Hello multiverse ⭐",
  };
};
