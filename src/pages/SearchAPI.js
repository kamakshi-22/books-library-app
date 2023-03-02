import React, {useState} from 'react'


export const SearchAPI = async (searchTerm,offset,limit) => {
    const url = `https://openlibrary.org/search.json?q=${searchTerm}&limit=${limit}&offset=${offset}}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    if (data.docs.length === 0) {
        throw new Error('No results found');
    }
    return data;
}
