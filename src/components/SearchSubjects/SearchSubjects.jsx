import React from 'react'
import './SearchSubjects.scss'
export const SearchSubjects = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <form className='search-form-subjects' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search Subjects' />
            <button type='submit'>
                <ion-icon name='search'></ion-icon>
            </button>
        </form>
    )
}
