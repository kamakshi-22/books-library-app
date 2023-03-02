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
    setErrorMessage,

}) => {

    const handleNextPage = async () => {
        try {
            let data;
            if (selectedTrendingSubject) {
                data = await SubjectsAPI(selectedTrendingSubject, offset + limit, limit);
            }
            else {
                data = await SubjectsAPI(searchTerm, offset + limit, limit);
            }
            if (data.works.length === 0) {
                setErrorMessage("No more results found.");
            } else {
                onSearch(data);
                setOffset(offset + limit);
                setErrorMessage("");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("Unable to load next page.");
        }
    };


    const handlePrevPage = async () => {
        try {
            const newOffset = Math.max(offset - limit, 0);
            let data;
            if (selectedTrendingSubject) {
                data = await SubjectsAPI(selectedTrendingSubject, newOffset, limit);
            } else {
                data = await SubjectsAPI(searchTerm, newOffset, limit);
            }
            onSearch(data);
            setOffset(newOffset);
            setErrorMessage("");
        } catch (error) {
            console.error(error);
            setErrorMessage("Unable to load previous page.");
        }
    };

    // const handleNextPage = () => {
    //     setOffset(offset + limit);
    // };

    // const handlePrevPage = () => {
    //     if (offset > 0) {
    //         setOffset(offset - limit);
    //     }
    // };

    return (
        <div className="pagination">
            <button type="button" onClick={handlePrevPage}>
                Prev
            </button>

            <button type="button" onClick={handleNextPage}>
                Next
            </button>
        </div>
    );
}

