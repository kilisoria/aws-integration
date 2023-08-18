export type AmplifyDependentResourcesAttributes = {
  "api": {
    "appsyncapi3": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "function": {
    "appsyncapi3shared": {
      "Arn": "string"
    },
    "thisIsDiferent": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}