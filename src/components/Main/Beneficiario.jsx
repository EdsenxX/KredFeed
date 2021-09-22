// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";

const Beneficiario = (props) => {
  return (
    <Section title="Beneficiario" onChange={props.handleBeneficiario} id="beneficiario">
      <Input title="Nombre" type="text" name="nombre" required onChange={props.handleBeneficiario}/>
      <Input title="Fecha de Nacimiento" type="date" name="fechaNacimiento" required onChange={props.handleBeneficiario}/>
      <Input title="CURP" type="text" name="curp" required onChange={props.handleBeneficiario}/>
      <Input title="Genero" type="text" name="genero" required onChange={props.handleBeneficiario}/>
      <Input title="Domicilio Particular" type="text" name="domicilioParticular" required onChange={props.handleBeneficiario}/>
      <Input title="Numero de Telefono" type="number" name="numeroTelefono" required onChange={props.handleBeneficiario}/>
      <Input title="Correo Electronico" type="email" name="correoElectronico" required onChange={props.handleBeneficiario}/>
    </Section>
  );
};

export default Beneficiario;
