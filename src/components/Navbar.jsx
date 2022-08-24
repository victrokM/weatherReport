import React from "react";
import { useState } from "react";
import "../css/Navbar.css";

function Navbar({ newLocation }) {
  const [ciudad, setCiudad] = useState("ciudad");

  const onSubmit = (e) => {
    e.preventDefault();
    if (ciudad === "" || !ciudad) {
      setCiudad("ciudad");
    }
    newLocation(ciudad);
  };

  return (
    <div>
      <header>
        <a href="">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6183/6183015.png"
              alt="icono default"
              className="img-logo"
            />
            <p className="titulo">Weather Report</p>
          </div>
        </a>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="City"
            className="buscarCiudad"
            onChange={(e) => setCiudad(e.target.value)}
          />
          <button type="submit" className="btn_buscar">
            Search
          </button>
        </form>
        {/* <p className="CiudadNavbar">{ciudad}</p> */}
      </header>
    </div>
  );
}

export default Navbar;
