import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query {
        books {
            name
            genre
            id
        }
    }
`;

export const GET_AUTHORS = gql`
    query {
        authors {
            name
            age
            id
        }
    }
`;
