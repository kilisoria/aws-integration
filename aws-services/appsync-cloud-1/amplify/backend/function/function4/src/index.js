

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
        return `Awesomeeeeee! ${event.arguments.msg}`;
};
