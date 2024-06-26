import React, { useEffect, useRef } from "react";
import "../styles/Contador.css";

// Display de contator
function Contador({ numClics }) {
  return (
    <div id="contador-contenedor" className="contador">
      {numClics}
    </div>
  );
}

export default Contador;
