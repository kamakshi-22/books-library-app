import React from 'react'
import './BookDetails.scss'
export const BookDetails = ({ bookData }) => {
    return (
        <div className='bookDetails'>
            {
                bookData.length > 0
                    ? (
                        <div className='card-item'>
                            {
                                bookData.map((book) => (
                                    <a
                                        key={book.title}
                                        href={`https://en.wikipedia.org/wiki/${book.title}`}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="card-container" >
                                        <img src={book.image} alt="book.title" />
                                        <div className='card-description'>
                                            <div className='card-title'>
                                                {book.title.slice(0, 60)}{book.title.length > 60 ? '...' : ''}
                                            </div>
                                            <div className='card-subtitle'>
                                                <div className='card-author'>{book.author}</div>
                                                <div className='card-year'>{book.publishYear}</div>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    )
                    : (<p>Please search for a book.</p>)
            }
        </div>
    );
}
