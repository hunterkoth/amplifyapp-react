/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDomainRawTextFile = /* GraphQL */ `
  query GetDomainRawTextFile($id: ID!) {
    getDomainRawTextFile(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDomainRawTextFiles = /* GraphQL */ `
  query ListDomainRawTextFiles(
    $filter: ModelDomainRawTextFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDomainRawTextFiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
