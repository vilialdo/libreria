// RestaurantDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {BookContext} from '../context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(r => r.id === bookId);

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    //console.log(book.name);

    return (
        <div className="book-details">
            <h2 className="book-name">{book.name}</h2>
            <p className="book-author">Autor: {book.author}</p>
            <p className="book-rating">Calificación: {book.rating}</p>
        </div>
    );
}

export default BookDetails;