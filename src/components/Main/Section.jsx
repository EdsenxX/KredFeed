// Depdendencies
import React from "react";

const Section = (props) => {
  return (
    <form
      className="rounded-xl px-4 py-6 bg-gray-100 flex flex-col	flex-wrap mb-6 sm:flex-row"
      id={props.id}
      onSubmit={props.save}
      noValidate
    >
      <p className="mb-4 block w-full">{props.title}</p>
      {props.children}
      <div className="w-full flex justify-center my-4">
        <button type="submit" className="bg-red-700 text-gray-50 py-2 rounded-lg block w-1/2 shadow-xl transform hover:scale-90 duration-300">
          Guardar
        </button>
      </div>
      <p className="block w-full text-xs text-gray-600 ml-1">
        Campos Obligatorios <span className="text-red-500">*</span>
      </p>
    </form>
  );
};

export default Section;
