    import React from 'react';
    import {Link} from "react-router-dom";
    import '../styles/Welcome.css';
    import useRedirection from "../hooks/useRedirection";

    function Welcome() {

        useRedirection("/books", 3000); 
        var imageName = require('../images/loader.gif');

        return (


            <div class="container">
                <div class="jumbotron">
                <h1>Bienvenidos a la Libreria UNIR</h1>      
                <p>En esta libreria podras encontrar los libros mas vendidos!</p>
                </div>
                
                <div class=" h-100 d-flex justify-content-center align-items-center">
                    <img src={imageName} className="spinner" />
                </div>

            </div>




        );
    }

    export default Welcome;
