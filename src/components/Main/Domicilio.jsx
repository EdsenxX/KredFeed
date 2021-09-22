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
        title="Calle o Avenido"
        type="text"
        name="calleAvenida"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Numero exterior"
        type="text"
        name="numeroExterior"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Numero interior"
        type="text"
        name="numeroInterior"
        onChange={props.handleDomicilio}
      />
      <Input
        title="Codigo Postal"
        type="number"
        name="codigoPostal"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Colonia Urbanizacion"
        type="text"
        name="coloniaUrbanizacion"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Delegacion o Municipio"
        type="text"
        name="delegacionMunicipio"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Ciudad o poblacion"
        type="text"
        name="cuidadPoblacion"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Entidad Federativa o estado"
        type="text"
        name="entidadFederativaEstado"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Pais"
        type="text"
        name="pais"
        required
        onChange={props.handleDomicilio}
      />
      <Input
        title="Numero de Telefono del Domicilio"
        type="number"
        name="numeroTelefono"
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
