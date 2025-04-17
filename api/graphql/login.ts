// graphql/mutations/login.ts
import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(
      input: {
        provider: PASSWORD
        credentials: {
          username: $username
          password: $password
        }
      }
    ) {
      authToken
      refreshToken
      user {
        id
        email
        name
      }
    }
  }
`
