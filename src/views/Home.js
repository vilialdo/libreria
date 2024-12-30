import React, {useContext} from 'react';
//import '../styles/styles.css';
import {Book} from "../components/Book";
import {Header} from "../components/Header";
//import {Footer} from "../components/Footer";
import { BookContext } from '../context/BookContext';


export const Home = () => {

    const { books } = useContext(BookContext);

    return (
        <div>
            <h2 className="center-text">Listado de Libros</h2>
            <div className="restaurant-container">

                {
                    books.length > 0 ? (
                        books.map((book, index) => (
                            <Book
                                key={index}
                                id={book.id}
                                name={book.name}
                                author={book.author}
                                rating={book.rating}
                            />
                        ))
                    ) : (
                        <h1>No hay libros</h1>
                    )
                }

                {}
            </div>
        </div>
    );
}