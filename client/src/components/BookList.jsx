import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_BOOKS } from '../GraphQL/Queries';
import BookDetails from '../components/BookDetails';

const BookList = () => {
	const { error, loading, data } = useQuery(GET_BOOKS);
	const [books, setBooks] = useState([]);
	const [bookId, setBookId] = useState('');

	useEffect(() => {
		setBooks(data && data.books);
	}, [data]);

	const getBookId = id => {
		setBookId(id && id);
	};

	return (
		<>
			<div>
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error.message}</p>}
				{books &&
					books.map(data => (
						<ul key={data.id} id='book-list' className='container'>
							<li onClick={() => getBookId(data.id)}>
								{data.name}
							</li>
						</ul>
					))}
			</div>
			<BookDetails bookId={bookId} />
		</>
	);
};

export default BookList;
