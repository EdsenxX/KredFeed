// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";

const Banco = (props) => {

  const save = (e) => {
    const correctForm = props.validateForm(e);
    if (correctForm) {
      alert("Informacion del banco guradada correctamente");
    }
  };
  
  return (
    <Section title="Cuenta Bancaria" id="cuentaBancaria" save={save}>
      <Input
        title="CLABE"
        type="text"
        name="clabe"
        required
        onChange={props.handleCuentaBancaria}
      />
      <Input
        title="Banco"
        type="text"
        name="banco"
        required
        onChange={props.handleCuentaBancaria}
      />
    </Section>
  );
};

export default Banco;
