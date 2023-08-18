/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
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
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
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
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
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
