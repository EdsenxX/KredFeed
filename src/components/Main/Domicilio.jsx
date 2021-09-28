// Dependencies
import React from "react";
// components
import Section from "./Section";
import DomicilioInputs from "./DomicilioInputs";

const Domicilio = (props) => {
  const save = (e) => {
    const correctForm = props.validateForm(e);
    if (correctForm) {
      alert("Informacion del domicilio guardada correctamente");
    }
  };

  return (
    <Section title="Domicilio" id="domicilio" save={save}>
      <DomicilioInputs onChange={props.handleDomicilio} />
    </Section>
  );
};

export default Domicilio;
