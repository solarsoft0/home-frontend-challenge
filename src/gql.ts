import { gql } from '@apollo/client'

export const CREATE_REGISTRATION = gql`
  mutation {
    createRegistration(input: {}) {
      id
    }
  }
`

export const ALL_REGISTRATIONS = gql`
  query {
    allRegistrations {
      id
      email
      fullName
      phoneNumber
      salary
    }
  }
`
export const LOCAL_REGISTRATION_FRAGMENT = gql`
  fragment RegistrationLocal on Registration {
    id
    email
    fullName
    phoneNumber
    salary
  }
`
