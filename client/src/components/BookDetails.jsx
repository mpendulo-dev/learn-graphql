import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOK } from "../GraphQL/Queries";

const BookDetails = ({ bookId }) => {
    const { error, loading, data } = useQuery(GET_BOOK, {
        variables: {
            id: bookId,
        },
        refetchQueries: [GET_BOOK],
    });
    const [authorBook, setAuthorBook] = useState([]);

    useEffect(() => {
        setAuthorBook(data !== undefined ? data.book : []);
    }, [data]);

    return (
        <div id="book-details">
            {loading && <p>Loading...</p>}

            {authorBook.length !== 0 ? (
                <>
                    <p>Output book details</p>
                    <h2>Book name: {authorBook.name}</h2>
                    <p>Genre: {authorBook.genre}</p>
                    <p>Author name: {authorBook.author.name}</p>
                    <p>Author age: {authorBook.author.age}</p>
                    <p>Books written by Author: </p>
                    {authorBook &&
                        authorBook.author.books.map((books) => (
                            <ul className="other-books" key={books.id}>
                                <li>{books.name}</li>
                            </ul>
                        ))}
                </>
            ) : (
                <>
                    <p>No book selected ...</p>
                </>
            )}
        </div>
    );
};

export default BookDetails;
