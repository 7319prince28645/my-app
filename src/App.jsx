import "./style.css";
import React, { useState } from "react";
import { Contenido } from "./content/contenido";
import Registrado from "./content/registrado";
export default function App() {
  const [recibirHijo, setRecibirHijo] = useState("");
  const [recibirHijoNumber, setRecibirHijoNumber] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [cvv, setCvv] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const recibirDato = (valor) => setRecibirHijo(valor);
  const recibirDatoNumber = (valor) => setRecibirHijoNumber(valor);
  const recibirMM = (valor) => setMM(valor);
  const recibirYY = (valor) => setYY(valor);
  const mostrarDatos = (valor) => setMostrar(valor);
  const recibirCvv = (valor) => setCvv(valor);
  return (
    <div className="App">
      <div className="content">
        <div className="TextoDelantero">
          <p className="Texto"> {mostrar ? recibirHijo : "NAME LASTNAME"} </p>
          <p className="Number">
            {mostrar ? recibirHijoNumber : "0000 0000 0000 0000"}{" "}
          </p>
          <p className="Cvv">{mostrar ? MM + "/" + YY : "00/00"} </p>
        </div>
        <div className="TextoDetras">
          <p className="PonerCvv">{mostrar ? cvv : "000"}</p>
        </div>
      </div>
      {mostrar ? (
        <Registrado mostrarDatos={mostrarDatos}/>
      ) : (
        <Contenido
          recibir={recibirDato}
          recibirNumber={recibirDatoNumber}
          recibirMM={recibirMM}
          recibirYY={recibirYY}
          mostrarDatos={mostrarDatos}
          recibirCvv={recibirCvv}
        />
      )}
    </div>
  );
}
