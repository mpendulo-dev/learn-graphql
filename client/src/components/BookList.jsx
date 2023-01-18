import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_BOOKS } from "../GraphQL/Queries";

const BookList = () => {
    
    const { error, loading, data } = useQuery(GET_BOOKS);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(data.books);
    }, [data]);

    console.log(books);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {books &&
                books.map((data) => (
                    <ul>
                        <li key={data.id}>{data.name}</li>
                    </ul>
                ))}
        </div>
    );
};

export default BookList;
