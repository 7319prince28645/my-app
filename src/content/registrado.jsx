import React, {useState} from "react";
import "./registrado.css";
import { BiCheck} from "react-icons/bi";
function Registrado({mostrarDatos}) {
    const [contador, setContador] = useState(false);
    const mostrarDatos1 = (e) => {
        e.preventDefault();
        setContador(true);
        mostrarDatos(contador);
        };
  return (
    <form className="contenedor" onSubmit={mostrarDatos1}>
      <BiCheck className="check" />
      <p className="tittle">THANKS YOU!</p>
      <p className="register">We've added your code details</p>
      <button className="buttoncheck">CONTINUE</button>
    </form>
  );
}

export default Registrado;
