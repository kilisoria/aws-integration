/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTestInput = {
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type test = {
  __typename: "test",
  id: string,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type DeleteTestInput = {
  id: string,
};

export type UpdateTestInput = {
  id: string,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type TableTestFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  when?: TableStringFilterInput | null,
  where?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type testConnection = {
  __typename: "testConnection",
  items?:  Array<test | null > | null,
  nextToken?: string | null,
};

export type CreateTestMutationVariables = {
  input: CreateTestInput,
};

export type CreateTestMutation = {
  createTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type DeleteTestMutationVariables = {
  input: DeleteTestInput,
};

export type DeleteTestMutation = {
  deleteTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type UpdateTestMutationVariables = {
  input: UpdateTestInput,
};

export type UpdateTestMutation = {
  updateTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type GetTestQueryVariables = {
  id: string,
};

export type GetTestQuery = {
  getTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type ListTestsQueryVariables = {
  filter?: TableTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestsQuery = {
  listTests?:  {
    __typename: "testConnection",
    items?:  Array< {
      __typename: "test",
      id: string,
      name?: string | null,
      when?: string | null,
      where?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTestSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type OnCreateTestSubscription = {
  onCreateTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type OnDeleteTestSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type OnDeleteTestSubscription = {
  onDeleteTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type OnUpdateTestSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type OnUpdateTestSubscription = {
  onUpdateTest?:  {
    __typename: "test",
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};
