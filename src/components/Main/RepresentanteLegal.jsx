// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";
import InputFile from "./InputFile";

const RepresentanteLegal = (props) => {
  return (
    <Section title="Representante Legal" id="representanteLegal">
      <Input title="Nombre" type="text" name="nombre" required onChange={props.handleRepresentanteLegal}/>
      <Input title="Género" type="text" name="genero" required onChange={props.handleRepresentanteLegal}/>
      <Input
        title="Fecha Nacimiento"
        type="date"
        name="genefechaNacimientoro"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <Input
        title="Entidad Federativa de Nacimiento"
        type="text"
        name="entidadFederativaNacimiento"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <Input
        title="País de Nacimiento"
        type="text"
        name="paisNacimiento"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <Input title="Nacionaliad" type="text" name="nacionalidad" required onChange={props.handleRepresentanteLegal}/>
      <Input title="CURP" type="text" name="curp" required onChange={props.handleRepresentanteLegal}/>
      <Input title="RFC" type="text" name="rfc" required onChange={props.handleRepresentanteLegal}/>
      <Input
        title="Domicilio Particular"
        type="text"
        name="domicilioParticular"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <Input title="Estado Civil" type="text" name="estadoCivil" required onChange={props.handleRepresentanteLegal}/>
      <Input
        title="Correo Electrónico"
        type="text"
        name="correoElectronicoRepresentante"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <Input
        title="Teléfono"
        type="text"
        name="telefonoRepresentante"
        required
        onChange={props.handleRepresentanteLegal}
      />
      <InputFile
        title="Documento de Identificación"
        name="documentoIdentidad"
        required
        onChange={props.handleRepresentanteLegal}
      />
    </Section>
  );
};

export default RepresentanteLegal;
