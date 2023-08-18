/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      name
      description
      code
      zip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        code
        zip
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
