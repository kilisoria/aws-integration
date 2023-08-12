/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      name
      when
      where
      __typename
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: TableTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        when
        where
        __typename
      }
      nextToken
      __typename
    }
  }
`;
