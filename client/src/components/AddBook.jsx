import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_AUTHORS } from "../GraphQL/Queries";

const AddBook = () => {
    const { error, loading, data } = useQuery(GET_AUTHORS);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        setAuthors(data && data.authors);
    }, [data]);

    console.log(authors);

    return (
        <>
            <form id="add-book">
                <div className="field">
                    <label>Book name: </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Genre: </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author: </label>
                    <select>
                        {loading && (
                            <option value={`Loading authors...`}>
                                Loading authors...
                            </option>
                        )}
                        {authors &&
                            authors.map((data) => (
                                <option key={data.id}>{data.name}</option>
                            ))}
                    </select>
                </div>

                <button>+</button>
            </form>
        </>
    );
};

export default AddBook;
