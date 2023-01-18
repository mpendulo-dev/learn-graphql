import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, GET_BOOKS } from '../GraphQL/Queries';
import { ADD_BOOK } from '../GraphQL/Mutation';

const AddBook = () => {
	const { error, loading, data } = useQuery(GET_AUTHORS);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		setAuthors(data && data.authors);
	}, [data]);

	const [form, setForm] = useState({
		name: '',
		genre: '',
		authorId: '',
	});

	const [addBook, { err }] = useMutation(ADD_BOOK);

	const createBook = () => {
		addBook({
			variables: {
				name: form.name,
				genre: form.genre,
				authorId: form.authorId,
			},
			refetchQueries: [GET_BOOKS],
		});
		if (err) {
			console.log(err);
		}
	};

	const submitForm = e => {
		e.preventDefault();

		createBook();

		e.target.reset();
	};

	return (
		<>
			<form id='add-book' onSubmit={submitForm}>
				<div className='field'>
					<label>Book name: </label>
					<input
						type='text'
						onChange={e => setForm({ name: e.target.value })}
					/>
				</div>

				<div className='field'>
					<label>Genre: </label>
					<input
						type='text'
						onChange={e => setForm({ ...form, genre: e.target.value })}
					/>
				</div>

				<div className='field'>
					<label>Author: </label>
					<select
						onChange={e => setForm({ ...form, authorId: e.target.value })}>
						{loading && (
							<option value={`Loading authors...`}>Loading authors...</option>
						)}
						<option>Select author</option>
						{authors &&
							authors.map(data => (
								<option key={data.id} value={data.id}>
									{data.name}
								</option>
							))}
					</select>
				</div>

				<button>+</button>
			</form>
		</>
	);
};

export default AddBook;
