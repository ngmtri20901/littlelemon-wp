// graphql/queries/posts.ts
import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        id
        title
        excerpt
        uri
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`
