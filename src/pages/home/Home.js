import React, { useState } from 'react'
import { SearchBooks } from '../../components/SearchBooks/SearchBooks'
import { SearchSubjects } from '../../components/SearchSubjects/SearchSubjects'
import { Pagination } from '../../components/Pagination/Pagination'
import './Home.scss'
import fantasy from '../../assets/images/trending/fantasy.jpeg';
import romance from '../../assets/images/trending/romance.jpeg';
import thriller from '../../assets/images/trending/thriller.jpeg';
import horror from '../../assets/images/trending/horror.jpeg';
import memoirs from '../../assets/images/trending/memoirs.jpeg';
import { BookDetails } from '../../components/BookDetails/BookDetails';
import { Header } from '../../components/Header/Header'

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [bookData, setBookData] = React.useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedTrendingSubject, setSelectedTrendingSubject] = useState('');
    const [totalBooks, setTotalBooks] = useState(0);

    const [bookSearchTerm, setBookSearchTerm] = useState('');
    const [bookErrorMessage, setBookErrorMessage] = useState('');
    const [bookIsLoading, setBookIsLoading] = useState(false);

    const [pageErrorMessage, setPageErrorMessage] = useState('');
    const handleSearch = (data) => {
        const books = data.works.map((book) => {
            return {
                key: book.key,
                title: book.title,
                author: book.authors[0]?.name,
                publishYear: book.first_publish_year,
                image: book.cover_id ? `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : 'https://via.placeholder.com/250',
            };
        });
        setBookData(books);
    }

    const handleSearchBooks = (data) => {
        console.log(data);
        const books = data.docs.map((book) => {
            return {
                key: book.key,
                title: book.title,
                author: book.author_name,
                publishYear: book.first_publish_year,
                image: book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/250',
            };
        });
        setBookData(books);
    }

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12);
    return (
        <div className='home'>
            <div className='trending-section'>
                <div className='trending-title'>Trending Subjects</div>
                <SearchSubjects
                    onSearch={handleSearch}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    bookSearchTerm={bookSearchTerm}
                    setBookSearchTerm={setBookSearchTerm}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    selectedTrendingSubject={selectedTrendingSubject}
                    setSelectedTrendingSubject={setSelectedTrendingSubject}
                    offset={offset}
                    setOffset={setOffset}
                    limit={limit}
                    pageErrorMessage={pageErrorMessage}
                    setPageErrorMessage={setPageErrorMessage}
                    setBookData={setBookData}
                    setSearchTitle={setSearchTitle}
                    setTotalBooks={setTotalBooks}
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
                    <SearchBooks
                        onBookSearch={handleSearchBooks}
                        bookSearchTerm={bookSearchTerm}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        setBookSearchTerm={setBookSearchTerm}
                        bookErrorMessage={bookErrorMessage}
                        setBookErrorMessage={setBookErrorMessage}
                        bookIsLoading={bookIsLoading}
                        setBookIsLoading={setBookIsLoading}
                        offset={offset}
                        setOffset={setOffset}
                        limit={limit}
                        pageErrorMessage={pageErrorMessage}
                        setPageErrorMessage={setPageErrorMessage}
                        setBookData={setBookData}
                        setSearchTitle={setSearchTitle}
                        setTotalBooks={setTotalBooks}
                    />
                </div>
                <div className='search-results'>
                    <h2>Search Results</h2>
                    {bookData.length > 0 && (
                        <p>
                            Found {totalBooks} result{totalBooks !== 1 ? "s" : ""} for
                            <span>" {searchTitle} "</span>
                        </p>
                    )}

                    <BookDetails bookData={bookData} />
                </div>
                <Pagination
                    offset={offset}
                    limit={limit}
                    setOffset={setOffset}
                    setLimit={setLimit}
                    selectedTrendingSubject={selectedTrendingSubject}
                    searchTerm={searchTerm}
                    onSearch={handleSearch}
                    onBookSearch={handleSearchBooks}
                    bookSearchTerm={bookSearchTerm}
                    pageErrorMessage={pageErrorMessage}
                    setPageErrorMessage={setPageErrorMessage}
                />

            </div>
        </div>
    )
}
