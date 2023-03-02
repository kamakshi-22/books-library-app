import React, { useState, useEffect } from 'react'
import './Pagination.scss'
import { SubjectsAPI } from '../../pages/SubjectsAPI';
import { SearchAPI } from '../../pages/SearchAPI';
export const Pagination = ({
    offset,
    setOffset,
    limit,
    setLimit,
    selectedTrendingSubject,
    searchTerm,
    onSearch,
    onBookSearch,
    bookSearchTerm,
    pageErrorMessage,
    setPageErrorMessage,
}) => {

    const handleNextPage = async () => {
        try {
            let data;
            if (selectedTrendingSubject) {
                data = await SubjectsAPI(selectedTrendingSubject, offset + limit, limit);
            }
            else if (searchTerm) {
                data = await SubjectsAPI(searchTerm, offset + limit, limit);
            }
            else if (bookSearchTerm) {
                data = await SearchAPI(bookSearchTerm, offset + limit, limit);
            }
            if (!data) {
                setPageErrorMessage("No more results found.");
            } else {
                onSearch(data);
                setOffset(offset + limit);
                setPageErrorMessage("");
            }
        } catch (error) {
            console.error(error);
            setPageErrorMessage("Unable to load next page.");
        }
    };


    const handlePrevPage = async () => {
        try {
            let data;
            if (selectedTrendingSubject) {
                data = await SubjectsAPI(selectedTrendingSubject, offset - limit, limit);
            }
            else if (searchTerm) {
                data = await SubjectsAPI(searchTerm, offset - limit, limit);
            }
            else if (bookSearchTerm) {
                data = await SearchAPI(bookSearchTerm, offset - limit, limit);
            }
            if (!data) {
                setPageErrorMessage("No more results found.");
            } else {
                onSearch(data);
                setOffset(offset - limit);
                setPageErrorMessage("");
            }
        } catch (error) {
            console.error(error);
            setPageErrorMessage("Unable to load previous page.");
        }
    };

    return (
        <>
            <div className="pagination">
                <button type="button" onClick={handlePrevPage}>
                    Prev
                </button>

                <button type="button" onClick={handleNextPage}>
                    Next
                </button>
            </div>
            {pageErrorMessage && <div className="error">{pageErrorMessage}</div>}
        </>

    );
}

