import React, { useState } from "react";
import "./contenido.css";

export function Contenido({
  recibir,
  recibirNumber,
  recibirMM,
  recibirYY,
  mostrarDatos,
  recibirCvv,
}) {
  const [contador, setContador] = useState("");
  const pasarText = (e) => {
    const inputValue = e.target.value;
    setContador(inputValue);
    recibir(inputValue);
  };
  const [contadorNumber, setContadorNumber] = useState("");
  const pasarTextNumber = (e) => {
    const { value } = e.target; // Corregir aquí, cambia event por e
    const sanitizedValue = value.replace(/\D/g, "");
    // Separamos los números en grupos de 4 dígitos con un espacio entre cada grupo
    const formattedValue = sanitizedValue.replace(/(.{4})/g, "$1 ");
    setContadorNumber(formattedValue);
    recibirNumber(formattedValue);
  };

  const [MandarMM, setMandarMM] = useState("");
  const MandarDatosMM = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    setMandarMM(sanitizedValue);
    recibirMM(sanitizedValue);
  };
  const [MandarYY, setMandarYY] = useState("");
  const MandarDatosYY = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    setMandarYY(sanitizedValue);
    recibirYY(sanitizedValue);
  };
  const [MandarCvv, setMandarCvv] = useState("");
  const MandarDatosCvv = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    setMandarCvv(sanitizedValue);
    recibirCvv(sanitizedValue);
  };
  const mostrarDatos1 = (e) => {
    e.preventDefault();
    mostrarDatos(true);
  };
  return (
    <div className="contenidoPrincipal">
      <form className="primero" onSubmit={mostrarDatos1}>
        <span className="input1">
          <label htmlFor="nombre">CARDHOLDER NAME</label>
          <input
            type="text"
            name="nombre"
            value={contador}
            onChange={pasarText}
            placeholder="Name Lastname"
            required="required"
          />
        </span>
        <span className="input2">
          <label htmlFor="numero">CARD NUMBER</label>
          <input
            type="text"
            name="numero"
            value={contadorNumber}
            onChange={pasarTextNumber}
            maxLength="19"
            placeholder="0000 0000 0000 0000"
            required="required"
          />
        </span>
        <span className="segundo">
          <div className="separador">
            <div>
              <label htmlFor="enddate">EXP.DATE</label>
              <input
                type="text"
                placeholder="MM"
                name="enddate"
                id="enddate"
                value={MandarMM}
                onChange={MandarDatosMM}
                maxLength={2}
                required="required"
              />
            </div>
            <div>
              <label htmlFor="año">(MM/YY)</label>
              <input
                type="text"
                name="año"
                placeholder="YY"
                value={MandarYY}
                onChange={MandarDatosYY}
                maxLength={2}
                required="required"
              />
            </div>
          </div>
          <div className="SeparadorCvv">
            <label htmlFor="vencimiento">CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="CVV"
              value={MandarCvv}
              onChange={MandarDatosCvv}
              maxLength={3}
              required="required"
            />
          </div>
        </span>
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
}

