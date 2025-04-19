import { gql } from "@apollo/client"

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!) {
    updateUser(
      input: {
        id: $id
        name: $name
      }
    ) {
      user {
        id
        name
      }
    }
  }
`
