import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_BOOK } from '../GraphQL/Queries';

const BookDetails = ({ bookId }) => {
	const { error, loading, data } = useQuery(GET_BOOK, {
		variables: {
			id: bookId,
		},
	});
	const [authorBook, setAuthorBook] = useState([]);

	useEffect(() => {
		setAuthorBook(data && data);
	}, [data]);

	console.log('book details', authorBook);
	return (
		<div id='book-details'>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			<p>Output book details</p>
		</div>
	);
};

export default BookDetails;
