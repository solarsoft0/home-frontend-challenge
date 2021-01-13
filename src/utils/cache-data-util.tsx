import { ALL_REGISTRATIONS, LOCAL_REGISTRATION_FRAGMENT } from '../gql'
import { ApolloClient } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { IRegistration } from '../types/common'


// note: if there was a corresponding server we could make this cache work with mutation and query and use optimistic response where deem fit

export const getAllRegistration = (client: ApolloClient<any>) => {
  return client.readQuery({ query: ALL_REGISTRATIONS })
}

export const initRegistration = (
  client: ApolloClient<any>
): { registrationData: IRegistration } => {
  // Create a new registration
  const registrationData: IRegistration = {
    id: uuidv4(),
    email: null,
    fullName: null,
    phoneNumber: null,
    salary: null,
    __typename: 'Registration',
  }

  const { allRegistrations: oldRegistration = [] }: { allRegistrations: IRegistration[] } =
    getAllRegistration(client) || {}
  const allRegistrations = [...oldRegistration, registrationData]
  client.writeQuery({
    query: ALL_REGISTRATIONS,
    data: {
      allRegistrations,
    },
  })

  return { registrationData }
}

// GET registration by id
export const getRegistrationData = (registrationId: string, client: ApolloClient<any>) => {
  return client.readFragment({
    id: `Registration:${registrationId}`, // The value of the to-do item's unique identifier
    fragment: LOCAL_REGISTRATION_FRAGMENT,
  })
}

// write to registration by id
export const updateRegistrationData = (
  registrationId: string,
  newData: Partial<IRegistration>,
  client: ApolloClient<any>
) => {
  const RegistrationLocal = getRegistrationData(registrationId, client)
  if (!RegistrationLocal) {
    return undefined
  }
  client.writeFragment({
    id: `Registration:${registrationId}`, // The value of the to-do item's unique identifier
    fragment: LOCAL_REGISTRATION_FRAGMENT,
    data: {
      ...newData,
    },
  })
  return { id: registrationId, ...newData }
}
