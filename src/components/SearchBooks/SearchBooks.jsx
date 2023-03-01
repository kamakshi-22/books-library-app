import React from 'react'
import './SearchBooks.scss'
export const SearchBooks = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <form className='searchbar-form-books' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search Book By Titles or By Author' />
            <button type='submit'>
                <ion-icon name='search'></ion-icon>
            </button>
        </form>
    )
}
