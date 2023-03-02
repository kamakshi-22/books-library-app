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
                                    <div key={book.title} className="card-container">
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
                                    </div>
                                ))
                            }
                        </div>
                    )
                    : (<p>Please search for a book.</p>)
            }

            {/* {bookData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publish Year</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookData.map((book) => (
                            <tr key={book.title}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publishYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Please search for a book.</p>
            )} */}
        </div>
    );
}
