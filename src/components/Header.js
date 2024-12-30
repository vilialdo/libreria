import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../styles/header.css';
import '../js/header.js';

export const Header = () => {
    return (

        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                <a href="#!">Logo</a>
                </div>
                <nav>
                <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                <ul class="nav-list">
                    <li>
                    <a href="#!">Inicio</a>
                    </li>
                    <li>
                    <a href="#!">Nosotros</a>
                    </li>
                    <li>
                    <a href="#!">Libros</a>
                    <ul class="navbar-dropdown">
                        <li>
                        <a href="#!">Sass</a>
                        </li>
                        <li>
                        <a href="#!">Less</a>
                        </li>
                        <li>
                        <a href="#!">Stylus</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="#!">Los mas vendidos</a>
                    </li>
                    <li>
                    <a href="#!">Categorias</a>
                    <ul class="navbar-dropdown">
                        <li>
                        <a href="#!">Sass</a>
                        </li>
                        <li>
                        <a href="#!">Less</a>
                        </li>
                        <li>
                        <a href="#!">Stylus</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="#!">Contactenos</a>
                    </li>
                </ul>
                </nav>
            </div>
            </section>





    );
}