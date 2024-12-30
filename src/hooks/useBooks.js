import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setBooks([
                {id: "1", name: "La Utopía Arcaica", author: "Mario Vargas Llosa", rating: 6},
                {id: "2", name: "El Paraíso en la Otra Esquina", author: "Mario Vargas Llosa", rating: 7},
                {id: "3", name: "Historia de Mayta", author: "Mario Vargas Llosa", rating: 6},
                {id: "4", name: "Pantaleón y las Visitadoras", author: "Mario Vargas Llosa", rating: 8},
                {id: "5", name: "CIEN AÑOS DE SOLEDAD", author: "Gabriel García Márquez", rating: 10},
                {id: "6", name: "Del Amor y Otros Demonios", author: "Gabriel García Márquez", rating: 8},
                {id: "7", name: "El Coronel No Tiene Quien Le Escriba", author: "Gabriel García Márquez", rating: 7},
            ]);
        }, 3000);
    }, []);

    return books;
}