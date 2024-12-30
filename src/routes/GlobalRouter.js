import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../views/Welcome';
import NotFound from '../views/NotFound';
import {Header} from "../components/Header";
import {Home} from "../views/Home";
import BookDetails from '../views/BookDetails';


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/books" element={<Layout><Home /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
