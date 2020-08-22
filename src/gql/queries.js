import gql from 'graphql-tag'

export const GET_POSTS = gql`
  query posts {
    posts {
      id
      title
      content
      image
      createdAt
      comments {
        id
        postId
        content
        createdAt
      }
    }
  }
`