import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`

export const AUTHENTICATE = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password:$password)
  }
`