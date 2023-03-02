import React from 'react'
import './SearchBooks.scss'
import { SearchAPI } from '../../pages/SearchAPI';
export const SearchBooks = (
    {
        onBookSearch,
        bookSearchTerm,
        setBookSearchTerm,
        bookErrorMessage,
        setBookErrorMessage,
        bookIsLoading,
        setBookIsLoading,
        offset,
        setOffset,
        limit,
        searchTerm,
        setSearchTerm,
    }
) => {

    //make the search key visible in the search box
    const handleSearchInputChange = (event) => {
        setBookSearchTerm(event.target.value);
    }

    //clear the searched text
    const handleClearSearch = () => {
        setBookSearchTerm("");
        setBookErrorMessage("");
    }

    //handle the submit event of the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBookErrorMessage("");
        setBookIsLoading(true);
        try {
            const data = await SearchAPI(bookSearchTerm);
            setBookIsLoading(true);
            console.log(data);
            onBookSearch(data);
            setBookErrorMessage("");
            setBookIsLoading(false);
            setSearchTerm("");
        } catch (error) {
            console.error(error);
            setBookErrorMessage("No results found.");
            setBookIsLoading(false);
        }
    };
    return (
        <div>
            <form className='search-form-books' onSubmit={handleSubmit}>
                <input type='text' placeholder='Search Subjects' value={bookSearchTerm} onChange={handleSearchInputChange} />
                <button type='submit'>
                    <ion-icon name='search'></ion-icon>
                </button>

            </form>
            <div className='container'>
                {bookIsLoading && <p>Loading...</p>}
                {bookErrorMessage && <p>{bookErrorMessage}</p>}
                {bookSearchTerm &&
                    <button type='button' onClick={handleClearSearch}>
                        <ion-icon name='close'></ion-icon>
                    </button>}
            </div>
        </div>
    )
}
