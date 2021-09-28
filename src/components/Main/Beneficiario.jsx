// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";
import DomicilioInputs from "./DomicilioInputs";

const Beneficiario = (props) => {
  const save = (e) => {
    const correctForm = props.validateForm(e);
    if (correctForm) {
      alert("Informacion General guardada correctamente");
    }
  };

  return (
    <Section
      title="Beneficiario"
      onChange={props.handleBeneficiario}
      id="beneficiario"
      save={save}
    >
      <Input
        title="Nombre"
        type="text"
        name="nombre"
        required
        onChange={props.handleBeneficiario}
      />
      <Input
        title="Fecha de Nacimiento"
        type="date"
        name="fechaNacimiento"
        required
        onChange={props.handleBeneficiario}
      />
      <Input
        title="CURP"
        type="text"
        name="curp"
        required
        onChange={props.handleBeneficiario}
      />
      <Input
        title="Género"
        type="text"
        name="genero"
        required
        onChange={props.handleBeneficiario}
      />
      <Input
        title="Número Telefónico"
        type="number"
        name="numeroTelefono"
        required
        onChange={props.handleBeneficiario}
      />
      <Input
        title="Correo Electrónico"
        type="email"
        name="correoElectronico"
        required
        onChange={props.handleBeneficiario}
      />
      {/* Domicilio */}
        <DomicilioInputs onChange={props.handleBeneficiarioDomicilio}/>
      {/* Domicilio */}
    </Section>
  );
};

export default Beneficiario;
