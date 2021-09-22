// Dependencies
import React from "react";
// components
import Section from "./Section";
import Input from "./Input";

const Banco = (props) => {
  return (
    <Section title="Cuenta Bancaria" id="cuentaBancaria">
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
