import React from 'react'
import { SearchBooks } from '../../components/SearchBooks/SearchBooks'
import { SearchSubjects } from '../../components/SearchSubjects/SearchSubjects'
import './Home.scss'

export const Home = () => {
    return (
        <div className='home'>
            <div className='left-trending-section'>
                <div className='trending-title'>Trending Subjects</div>
                    <SearchSubjects/>
                <div className='trending-list'>
                    <p className='trending-item'>Javascript</p>
                    <p className='trending-item'>React</p>
                    <p className='trending-item'>Node</p>
                    <p className='trending-item'>Python</p>
                    <p className='trending-item'>Java</p>
                </div>
            </div>
            <div className='right-search-section'>
                <div className='search-header'>
                    <SearchBooks/>
                </div>
            </div>
            
        </div>
    )
}
