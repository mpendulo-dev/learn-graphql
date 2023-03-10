import { useState } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';

function App() {
	return (
		<div className='App' id='main'>
			<h1>Student Reading List</h1>
			<BookList />
			<AddBook />
		</div>
	);
}

export default App;
