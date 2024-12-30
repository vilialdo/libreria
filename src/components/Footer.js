import React from "react";

export const Footer = () => {
    return (

        <footer class="footer bg-dark text-white py-5 navbar-fixed-bottom fixed-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <h4>Nosotros</h4>
                        <p>
                            Libreria UNIR es una libreria especializada 
                            en libros de ciencia ficcion, comedia, terror,etc
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4>Enlaces importantes</h4>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Home</a></li>
                            <li><a href="#" class="text-white">Convenios</a></li>
                            <li><a href="#" class="text-white">Servicios</a></li>
                            <li><a href="#" class="text-white">Los mas vendidos</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4>Contactenos</h4>
                        <ul class="list-unstyled">
                            <li>Lima, Perú</li>
                            <li>Av. Aviación 2514, San Borja</li>
                            <li>Email: vilialdo.mancisidor@gmail.com</li>
                            <li>Phone: +511 995522405</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>



    );
}