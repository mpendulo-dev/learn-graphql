import { gql } from '@apollo/client';

const GET_BOOKS = gql`
	query {
		books {
			name
			genre
			id
		}
	}
`;

const GET_AUTHORS = gql`
	query {
		authors {
			name
			age
			id
		}
	}
`;

export { GET_BOOKS, GET_AUTHORS };
