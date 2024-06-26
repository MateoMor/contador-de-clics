import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics((prevNumClics) => prevNumClics + 1);

    // Función que toma el contenedor de la pantalla y le hace el efecto de salto
    const contador = document.querySelector("#contador-contenedor");
    if (contador && !contador.classList.contains("animar")) {
      contador.classList.add("animar");
      setTimeout(() => {
        contador.classList.remove("animar");
      }, 300);
    }
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
