// Dependencies
import React from "react";
// Components
import InformacionGeneral from "./InformacionGeneral";
import Domicilio from "./Domicilio";
import RepresentanteLegal from "./RepresentanteLegal";
import Banco from "./Banco";
import Beneficiario from "./Beneficiario";

const Main = (props) => {
  return (
    <div className="w-full h-full overflow-y-scroll" id="main">
      <h1 className="text-center text-3xl mb-5">Perfil de Usuario</h1>
      <InformacionGeneral
        handleInformacionGeneral={props.handleInformacionGeneral}
      />
      <Domicilio handleDomicilio={props.handleDomicilio} />
      <RepresentanteLegal
        handleRepresentanteLegal={props.handleRepresentanteLegal}
      />
      <Banco handleCuentaBancaria={props.handleCuentaBancaria} />
      <Beneficiario handleBeneficiario={props.handleBeneficiario} />
    </div>
  );
};

export default Main;
