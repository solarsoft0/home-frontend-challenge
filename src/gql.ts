import { gql } from '@apollo/client'

export const CREATE_INQUIRY = gql`
    mutation CreateInquiry {
        createInquiry(type: HI) {
            id
            type
        }
    }
`;