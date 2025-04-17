// api/graphql/register.ts
import { gql } from "@apollo/client"

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!) {
    registerUser(
      input: {
        username: $username
        email: $email
        password: $password
        clientMutationId: "signup"
      }
    ) {
      user {
        id
        username
        email
      }
    }
  }
`
