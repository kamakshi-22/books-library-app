import React, {useState} from 'react'


export const SubjectsAPI = async (searchTerm, offset, limit) => {
    const url = `http://openlibrary.org/subjects/${searchTerm}.json?limit=${limit}&offset=${offset}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    if (data.works.length === 0) {
        throw new Error('No results found');
    }
    return data;
}

