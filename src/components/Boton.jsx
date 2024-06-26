import React from "react";
import '../styles/Boton.css'

// Componente que tiene los botones por defecto
const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
      {texto}
    </button>
  );
};

export default Boton;
