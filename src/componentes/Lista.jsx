import React from "react";
import Formulario from "./Formulario";
import "../hojas-de-estilo/Lista.css";

function Lista() {
  return (
    <>
      <Formulario />
      <div className="tareas-lista-contenedor">
        Lista de tareas
      </div>
    </>
  );
}

export default Lista;
