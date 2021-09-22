// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";

const InformacionGeneral = (props) => {
  return (
    <Section title="Informacion General" id="informacionGeneral">
      <Input
        title="Razón Social"
        type="text"
        name="razonSocial"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="Nacionalidad"
        type="text"
        name="nacionalidad"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="Fecha de constitucion"
        type="date"
        name="fechaConstitucion"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="RFC"
        type="text"
        name="rfc"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="Regimen Fiscal"
        type="text"
        name="regimenFiscal"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="Industria"
        type="text"
        name="industria"
        required
        onChange={props.handleInformacionGeneral}
      />
      <Input
        title="Direccion Correo Electronico"
        type="email"
        name="correoElectronico"
        required
        onChange={props.handleInformacionGeneral}
      />
    </Section>
  );
};

export default InformacionGeneral;
