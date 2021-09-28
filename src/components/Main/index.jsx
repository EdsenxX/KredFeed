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
        validateForm={props.validateForm}
      />
      <Domicilio
        handleDomicilio={props.handleDomicilio}
        validateForm={props.validateForm}
      />
      <RepresentanteLegal
        handleRepresentanteLegal={props.handleRepresentanteLegal}
        handleRepresentanteLegalDomicilio={
          props.handleRepresentanteLegalDomicilio
        }
        validateForm={props.validateForm}
      />
      <Banco
        handleCuentaBancaria={props.handleCuentaBancaria}
        validateForm={props.validateForm}
      />
      <Beneficiario
        handleBeneficiario={props.handleBeneficiario}
        handleBeneficiarioDomicilio={props.handleBeneficiarioDomicilio}
        validateForm={props.validateForm}
      />
    </div>
  );
};

export default Main;
