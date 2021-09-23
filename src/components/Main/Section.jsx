// Depdendencies
import React from "react";

const Section = (props) => {
  return (
    <section className="rounded-xl px-4 py-6 bg-gray-100 flex	flex-wrap mb-6" id={props.id}>
      <p className="mb-4 block w-full">{props.title}</p>
      {props.children}
      <p className="blocl w-full text-xs text-gray-600 ml-1">
        Campos Obligatorios <span className="text-red-500">*</span>
      </p>
    </section>
  );
};

export default Section;
