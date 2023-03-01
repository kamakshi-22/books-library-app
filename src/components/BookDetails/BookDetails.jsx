import React from 'react'
import './BookDetails.scss'
export const BookDetails = ({ bookData }) => {
    return (
        <div className='bookDetails'>
            
            
            {bookData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Latest Publish Year</th>
                            <th>First Publish Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookData.map((book) => (
                            <tr key={book.title}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.latestPublishYear}</td>
                                <td>{book.firstPublishYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Please search for a book.</p>
            )}
        </div>
    );
}
