import React, { useState, useEffect } from 'react'
import { BookDetails } from '../BookDetails/BookDetails';
import { Pagination } from '../Pagination/Pagination';
import { SubjectsAPI } from '../../pages/SubjectsAPI';
import './SearchSubjects.scss'

export const SearchSubjects = ({
    onSearch,
    selectedTrendingSubject,
    setSelectedTrendingSubject,
    searchTerm,
    setSearchTerm,
    errorMessage,
    setErrorMessage,
    isLoading,
    setIsLoading,
    offset,
    setOffset,
    limit,
    bookSearchTerm,
    setBookSearchTerm,
    setPageErrorMessage,
    setBookData,
    setSearchTitle,
    setTotalBooks
}) => {

    //make the search key visible in the search box
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    //clear the searched text
    const handleClearSearch = () => {
        setSearchTerm("");
        setErrorMessage("");
    }


    useEffect(() => {
        setIsLoading(true);
        setBookData("");
        setOffset(0);
        if (selectedTrendingSubject) {
            SubjectsAPI(selectedTrendingSubject, offset, limit)
                .then((data) => {
                    setIsLoading(true);
                    onSearch(data);
                    setErrorMessage("");
                    setSearchTerm("");
                    setIsLoading(false);
                    setBookSearchTerm("");
                    setPageErrorMessage("");
                    setSearchTitle(selectedTrendingSubject);
                    setTotalBooks(data.work_count);
                })
                .catch((error) => {
                    console.error(error);
                    setErrorMessage("No results found.");
                    setIsLoading(false);
                });
        } else {
            setErrorMessage("");
            setIsLoading(false);
        }
    }, [selectedTrendingSubject]);


    //handle the submit event of the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);
        setBookData("");
        setOffset(0);
        try {
            const data = await SubjectsAPI(searchTerm, offset, limit);
            setIsLoading(true);
            onSearch(data);
            setErrorMessage("");
            setSelectedTrendingSubject("");
            setIsLoading(false);
            setBookSearchTerm("");
            setPageErrorMessage("");
            setSearchTitle(searchTerm);
            setTotalBooks(data.work_count);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setErrorMessage("No results found.");
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
                {isLoading && <p>Loading...</p>}
                {errorMessage && <p>{errorMessage}</p>}
                {searchTerm &&
                    <button type='button' onClick={handleClearSearch}>
                        <ion-icon name='close'></ion-icon>
                    </button>}
            </div>
        </div>
    )
}
