// Depedendencies
import React from "react";
// assets
import styles from "../styles/Layout.module.scss";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = (props) => {
  return (
    <div className={`${styles.Layout} bg-gray-700`}>
      <div className={styles.Layout_container}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Main
            handleInformacionGeneral={props.handleInformacionGeneral}
            handleDomicilio={props.handleDomicilio}
            handleRepresentanteLegal={props.handleRepresentanteLegal}
            handleRepresentanteLegalDomicilio={
              props.handleRepresentanteLegalDomicilio
            }
            handleCuentaBancaria={props.handleCuentaBancaria}
            handleBeneficiario={props.handleBeneficiario}
            handleBeneficiarioDomicilio={props.handleBeneficiarioDomicilio}
            // Guardar
            validateForm={props.validateForm}
          />
        </main>
      </div>
    </div>
  );
};

export default Layout;
