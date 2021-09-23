// Dependencies
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [informacionGeneral, setInformacionGeneral] = useState(false);
  const [domicilio, setDomicilio] = useState(false);
  const [representanteLegal, setRepresentanteLegal] = useState(false);
  const [cuentaBancaria, setCuentaBancaria] = useState(false);
  const [beneficiario, setBeneficiario] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main");
    main.addEventListener("scroll", () => {
      setInformacionGeneral(false);
      setDomicilio(false);
      setRepresentanteLegal(false);
      setCuentaBancaria(false);
      setBeneficiario(false);
      if (isElementInViewport("informacionGeneral")) {
        setInformacionGeneral(true);
      } else if (isElementInViewport("domicilio")) {
        setDomicilio(true);
      } else if (isElementInViewport("representanteLegal")) {
        setRepresentanteLegal(true);
      } else if (isElementInViewport("cuentaBancaria")) {
        setCuentaBancaria(true);
      } else if (isElementInViewport("beneficiario")) {
        setBeneficiario(true);
      }
    });
  }, []);

  const isElementInViewport = (id) => {
    const element = document.getElementById(id);
    var rect = element.getBoundingClientRect();

    return (
      rect.bottom - 250> 0 &&
      rect.top + 200< (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-gray-100 rounded-xl p-5 h-full">
      <p className="text-2xl font-bold">Secciones</p>
      <ul className="list-decimal p-5">
        <li
          className={`hover:text-blue-500 mb-3 ${
            informacionGeneral ? "text-blue-500" : ""
          }`}
        >
          <button onClick={() => scroll("informacionGeneral")}>
            Informacion General
          </button>
        </li>
        <li
          className={`hover:text-blue-500 mb-3 ${
            domicilio ? "text-blue-500" : ""
          }`}
        >
          <button onClick={() => scroll("domicilio")}>Domicilio</button>
        </li>
        <li
          className={`hover:text-blue-500 mb-3 ${
            representanteLegal ? "text-blue-500" : ""
          }`}
        >
          <button onClick={() => scroll("representanteLegal")}>
            Representante Legal
          </button>
        </li>
        <li
          className={`hover:text-blue-500 mb-3 ${
            cuentaBancaria ? "text-blue-500" : ""
          }`}
        >
          <button onClick={() => scroll("cuentaBancaria")}>
            Cuenta Bancaria
          </button>
        </li>
        <li
          className={`hover:text-blue-500 mb-3 ${
            beneficiario ? "text-blue-500" : ""
          }`}
        >
          <button onClick={() => scroll("beneficiario")}>Beneficiario</button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
