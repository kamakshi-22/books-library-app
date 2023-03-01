import React, { useState, useEffect } from 'react'
import { BookDetails } from '../BookDetails/BookDetails';
import './SearchSubjects.scss'
export const SearchSubjects = ({ onSearch, selectedTrendingSubject, setSelectedTrendingSubject }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //make the search key visible in the search box
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    //clear the searched text
    const handleClearSearch = () => {
        setSearchTerm("");
        setErrorMessage("");
    }

    /** using the Search API */
    const searchBooks = async (searchTerm, offset) => {
        const url = `http://openlibrary.org/subjects/${searchTerm}.json?limit=10`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.name);
        return data;
    }

    useEffect(() => {
        if (selectedTrendingSubject) {
            searchBooks(selectedTrendingSubject, 0)
                .then((data) => {
                    onSearch(data);
                })
                .catch((error) => {
                    console.error(error);
                    setErrorMessage("No results found.");
                });
        }
    }, [selectedTrendingSubject]);

    // handle the submit event of the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log(searchTerm);

        try {
            const data = await searchBooks(searchTerm, 0);
            console.log(data.name);
            onSearch(data);
            // Do something with the API response data
        } catch (error) {
            console.error(error);
            setErrorMessage("No results found.");
            // Handle the API call error
        }
    };
    return (
        <div>
            <form className='search-form-subjects' onSubmit={handleSubmit}>
                <input type='text' placeholder='Search Subjects' value={searchTerm} onChange={handleSearchInputChange} />
                <button type='submit'>
                    <ion-icon name='search'></ion-icon>
                </button>

            </form>
            <div className='container'>
                {errorMessage && <p>{errorMessage}</p>}
                {searchTerm &&
                    <button type='button' onClick={handleClearSearch}>
                        <ion-icon name='close'></ion-icon>
                    </button>}
            </div>
        </div>
    )
}
