import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Lista from "./componentes/Lista"

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
