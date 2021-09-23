// Depedencies
import React, { useEffect, useState } from "react";
// Assets
import uploadIcon from "../../Assets/icons/upload.svg";
import pdfIcon from "../../Assets/icons/pdf.svg";
import styles from "../../styles/InputFile.module.scss";
import { Fragment } from "react/cjs/react.production.min";

const uuid = require("uuid");

const InputFile = (props) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const dropArea = document.getElementById("drag_area");
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add(styles.drag_over);
      console.log("no lo sueltes we, sacate alv");
    });
    dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove(styles.drag_over);
    });
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      handleFile(file);
    });
  });

  const handleFile = (file) => {
    console.log(file.type)
    if(file.type !== 'application/pdf'){
      return alert('tipo de archivo no valido')
    }
    setFile(file);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    handleFile(file);
  };

  const removeImage = () => {
    setFile(null)
  }

  const ramdom = uuid.v4().substr(0, 8);
  const ID = `${props.name}-${ramdom}`;

  return (
    <div className="w-full px-1 mb-3">
      <label htmlFor={ID} className="block text-gray-600 text-sm mb-2">
        {props.title}
        {props.required && <span className="text-red-500"> *</span>}
      </label>
      <div
        className={`${styles.drag_area} border-2 border-dashed border-gray-400`}
        id="drag_area"
      >
        {!file ? (
          <Fragment>
            <div className={styles.icon}>
              <img src={uploadIcon} alt="icono subir archivo" />
            </div>
            <header>Arrastra y suelta para subir un archivo</header>
            <span className="block">O</span>
            <label
              htmlFor={ID}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Selecciona un archivo
            </label>
            <input
              type="file"
              hidden
              id={ID}
              name={props.name}
              onChange={handleInputChange}
            />
          </Fragment>
        ) : (
          <Fragment>
            <div className={styles.icon}>
              <img src={pdfIcon} alt="icono subir archivo" />
            </div>
            <p>{file.name}</p>
            <p className="text-red-500 cursor-pointer" onClick={removeImage}>Eliminar</p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default InputFile;
