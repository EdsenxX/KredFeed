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

  validateForm = (event) => {
    event.preventDefault();
    // los children Htmlcollection se camvierte a array y se
    // quita el primer elemento que es un parrafo y los dor ultimos elementos
    const children = [...event.target.children].slice(1,-2)
    for (let index = 0; index < children.length; index++) {
      const element = children[index]
      const elementChildren = [...element.children]
      if(element.classList.contains('input-file')){
        if(typeof (elementChildren[1].children[4]) !== 'object'){
          elementChildren[1].classList.remove('border-red-500')
          elementChildren[2].classList.add('invisible')
        }
      }else{
        elementChildren[1].classList.remove('border','border-red-500')
        elementChildren[2].classList.add('invisible')
      }
    }
    let errors = 0;
    for (let index = 0; index < children.length; index++) {
      const element = children[index]
      const elementChildren = [...element.children]
      if(element.classList.contains('input-file')){
        if(typeof (elementChildren[1].children[4]) === 'object'){
          errors++;
          elementChildren[1].classList.add('border-red-500')
          elementChildren[2].classList.remove('invisible')
        }
      }else if (elementChildren[1].value.trim() === '' && elementChildren[1].required){
        errors++;
        elementChildren[1].classList.add('border','border-red-500')
        elementChildren[2].classList.remove('invisible')
      }else if(elementChildren[1].type === "email"){
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!re.test(elementChildren[1].value)){
          errors++;
          elementChildren[1].classList.add('border','border-red-500')
          elementChildren[2].classList.remove('invisible')
        }
      }
    }
    return errors === 0
  };

  render() {
    return (
      <Layout
        handleInformacionGeneral={this.handleInformacionGeneral}
        handleDomicilio={this.handleDomicilio}
        handleRepresentanteLegal={this.handleRepresentanteLegal}
        handleCuentaBancaria={this.handleCuentaBancaria}
        handleBeneficiario={this.handleBeneficiario}
        // Guardar
        validateForm={this.validateForm}
      />
    );
  }
}

export default Perfil;
