// Dependencies
import React, { Component } from "react";
// Components
import Layout from "../components/Layout";

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: {
        informacionGeneral: {
          razonSocial: "",
          nombreComercial: "",
          nacionalidad: "",
          fechaConstitucion: "",
          fechaInicioOperaciones: "",
          rfc: "",
          regimenFiscal: "",
          industria: "",
          correoElectronico: "",
        },
        domicilio: {
          calleAvenida: "",
          numeroExterior: "",
          numeroInterior: "",
          codigoPostal: "",
          coloniaUrbanizacion: "",
          delegacionMunicipio: "",
          cuidadPoblacion: "",
          entidadFederativaEstado: "",
          numeroTelefono: "",
          comprobante: "",
        },
        representanteLegal: {
          nombre: "",
          genero: "",
          genefechaNacimientoro: "",
          entidadFederativaNacimiento: "",
          paisNacimiento: "",
          nacionalidad: "",
          curp: "",
          rfc: "",
          domicilioParticular: "",
          correoElectronicoRepresentante: "",
          telefonoRepresentante: "",
          documentoIdentidad: "",
        },
        cuentaBancaria: {
          clabe: "",
          banco: "",
        },
        beneficiario: {
          nombre: "",
          fechaNacimiento: "",
          curp: "",
          genero: "",
          domicilioParticular: "",
          numeroTelefono: "",
          correoElectronico: "",
        },
      },
    };
  }

  handleInformacionGeneral = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      perfil: {
        ...prevState.perfil,
        informacionGeneral: {
          ...prevState.perfil.informacionGeneral,
          [name]: value,
        },
      },
    }));
  };

  handleDomicilio = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      perfil: {
        ...prevState.perfil,
        domicilio: {
          ...prevState.perfil.domicilio,
          [name]: value,
        },
      },
    }));
  };

  handleRepresentanteLegal = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      perfil: {
        ...prevState.perfil,
        representanteLegal: {
          ...prevState.perfil.representanteLegal,
          [name]: value,
        },
      },
    }));
  };

  handleCuentaBancaria = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      perfil: {
        ...prevState.perfil,
        cuentaBancaria: {
          ...prevState.perfil.cuentaBancaria,
          [name]: value,
        },
      },
    }));
  };

  handleBeneficiario = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      perfil: {
        ...prevState.perfil,
        beneficiario: {
          ...prevState.perfil.beneficiario,
          [name]: value,
        },
      },
    }));
  };

  render() {
    return (
      <Layout
        handleInformacionGeneral={this.handleInformacionGeneral}
        handleDomicilio={this.handleDomicilio}
        handleRepresentanteLegal={this.handleRepresentanteLegal}
        handleCuentaBancaria={this.handleCuentaBancaria}
        handleBeneficiario={this.handleBeneficiario}
      />
    );
  }
}

export default Perfil;
