import React from "react";
import images from './data/images.json';
import {useState} from 'react';
import Galeria from "./components/Galeria";
import question from './assets/question.svg';


function App() {
    const listaImagini = [...images, ...images].sort(() => Math.random() - 0.5);

    const [imagine, setImagine]=useState(question);
    function seteazaImagine(index) {
        setImagine(listaImagini[index].url); 
    }
 
    return (
        <div className="container">
            <Galeria listaIMG={listaImagini} im={seteazaImagine} imagine={imagine} />
        </div>
    );

} 

export default App;
