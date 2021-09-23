// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";
import InputFile from "./InputFile";

const Domicilio = (props) => {
  return (
    <Section title="Domicilio" id="domicilio">
      <Input
        title="Calle o Avenida"
        type="text"
        name="calleAvenida"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Número Exterior"
        type="text"
        name="numeroExterior"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Número Interior"
        type="text"
        name="numeroInterior"
        onChange={props.handleDomicilio}
      />
      <Input
        title="Código Postal"
        type="number"
        name="codigoPostal"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Colonia Urbanización"
        type="text"
        name="coloniaUrbanizacion"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Delegación o Municipio"
        type="text"
        name="delegacionMunicipio"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Ciudad o Población"
        type="text"
        name="cuidadPoblacion"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Entidad Federativa o Estado"
        type="text"
        name="entidadFederativaEstado"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="País"
        type="text"
        name="pais"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Numero Telefónico del Domicilio"
        type="number"
        name="numeroTelefono"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Dirección de Correo Electrónico"
        type="email"
        name="correoElectronico"
        required
        onChange={props.handleDomicilio}
      />
      <InputFile
        title="Comprobante de Domicilio"
        name="comprobante"
        required
        onChange={props.handleDomicilio}
      />
    </Section>
  );
};

export default Domicilio;
