

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    return `Look at! ${event.arguments.msg}`;
};
