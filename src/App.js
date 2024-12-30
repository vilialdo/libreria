import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import GlobalRouter from "./routes/GlobalRouter";

import {BookContext} from "./context/BookContext";
import {useBooks} from "./hooks/useBooks";

import {Footer} from "./components/Footer";


function App() {

  const books = useBooks();

  return (
    
    <BookContext.Provider value={{books}}>

      <GlobalRouter></GlobalRouter>
      <Footer />
    </BookContext.Provider>
    



  );
}

export default App;
