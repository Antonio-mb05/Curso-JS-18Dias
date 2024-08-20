import React from "react";
import Saludo from "./Saludo";
import Mensaje from "./Mensaje";

function App(){
  return(
    <div>
      <Saludo nombre="Antonio"/>
      <Mensaje mensaje="Bienvenido a mi aplicacion React"/>
      <Saludo nombre="Juan"/>
    </div>
  )
}

export default App;