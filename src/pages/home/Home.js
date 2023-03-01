import React, { useState } from 'react'
import { SearchBooks } from '../../components/SearchBooks/SearchBooks'
import { SearchSubjects } from '../../components/SearchSubjects/SearchSubjects'
import './Home.scss'

import fantasy from '../../assets/images/trending/fantasy.png';
import romance from '../../assets/images/trending/romance.jpeg';
import thriller from '../../assets/images/trending/thriller.jpeg';
import horror from '../../assets/images/trending/horror.jpeg';
import memoirs from '../../assets/images/trending/memoirs.jpeg';
import { BookDetails } from '../../components/BookDetails/BookDetails';

export const Home = () => {
    const [bookData, setBookData] = React.useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const handleSearch = (data) => {
        const books = data.works.map((book) => {
            return {
                title: book.title,
                author: book.authors[0]?.name,
                latestPublishYear: book.latest_revision,
                firstPublishYear: book.first_publish_year,
            };
        });
        setBookData(books);
        setSearchTitle(data.name);
        console.log(books);
    }

    const [selectedTrendingSubject, setSelectedTrendingSubject] = useState('');


    return (
        <div className='home'>
            <div className='trending-section'>
                <div className='trending-title'>Trending Subjects</div>
                <SearchSubjects
                    onSearch={handleSearch}
                    selectedTrendingSubject={selectedTrendingSubject}
                    setSelectedTrendingSubject={setSelectedTrendingSubject}
                />
                <div className='trending-list'>
                    <ul>
                        <li onClick={() => setSelectedTrendingSubject('fantasy')}>
                            <img src={fantasy} alt='trending-subject' />
                            <div className='trending-subject-name'>fantasy</div>
                        </li>
                        <li onClick={() => setSelectedTrendingSubject('thriller')}>
                            <img src={thriller} alt='trending-subject' />
                            <div className='trending-subject-name'>thriller</div>
                        </li>
                        <li onClick={() => setSelectedTrendingSubject('horror')}>
                            <img src={horror} alt='trending-subject' />
                            <div className='trending-subject-name'>horror</div>
                        </li>
                        <li onClick={() => setSelectedTrendingSubject('romance')}>
                            <img src={romance} alt='trending-subject' />
                            <div className='trending-subject-name'>romance</div>
                        </li>
                        <li onClick={() => setSelectedTrendingSubject('memoirs')}>
                            <img src={memoirs} alt='trending-subject' />
                            <div className='trending-subject-name'>memoirs</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='search-section'>
                <div className='search-header'>
                    <SearchBooks />
                </div>
                <div className='search-results'>
                    <h2>Search Results</h2>
                    {bookData.length > 0 && <p>Found {bookData.length} results for " {searchTitle} "</p>}
                    <BookDetails bookData={bookData} />
                </div>
                
            </div>
        </div>
    )
}
