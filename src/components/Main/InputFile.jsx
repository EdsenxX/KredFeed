// Depedencies
import React from "react";
const uuid = require('uuid');

const InputFile = (props) => {

  const ramdom = uuid.v4().substr(0,8)
  const ID = `${props.name}-${ramdom}`

  return (
    <div className="w-full px-1 mb-3">
      <label htmlFor={ID} className="block text-gray-600 text-sm mb-2">
        {props.title} {props.required && (<span className="text-red-500">*</span>)}
      </label>
      <input
        type="file"
        id={ID}
        name={props.name}
        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputFile;
