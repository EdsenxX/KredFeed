// Depedencies
import React from "react";
const uuid = require("uuid");

const Input = (props) => {
  const ramdom = uuid.v4().substr(0, 8);
  const ID = `${props.name}-${ramdom}`;

  return (
    <div className="w-full sm:w-1/2 px-1 mb-3">
      <label htmlFor={ID} className="block text-gray-600 text-sm mb-2">
        {props.title}
        {props.required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={props.type}
        id={ID}
        name={props.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded"
        onChange={props.onChange}
        required={ props.required ? true : false }
      />
      <p className="error text-red-500 text-xs invisible">Campo obligatorio</p>
    </div>
  );
};

export default Input;
