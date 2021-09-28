import Input from "./Input";
import InputFile from "./InputFile";

const DomicilioInputs = (props) => {
    return ( 
        <>
            <Input
        title="Calle o Avenida"
        type="text"
        name="calleAvenida"
        required
        onChange={props.onChange}
      />
      <Input
        title="Número Exterior"
        type="text"
        name="numeroExterior"
        required
        onChange={props.onChange}
      />
      <Input
        title="Número Interior"
        type="text"
        name="numeroInterior"
        onChange={props.onChange}
      />
      <Input
        title="Código Postal"
        type="number"
        name="codigoPostal"
        required
        onChange={props.onChange}
      />
      <Input
        title="Colonia Urbanización"
        type="text"
        name="coloniaUrbanizacion"
        required
        onChange={props.onChange}
      />
      <Input
        title="Delegación o Municipio"
        type="text"
        name="delegacionMunicipio"
        required
        onChange={props.onChange}
      />
      <Input
        title="Ciudad o Población"
        type="text"
        name="cuidadPoblacion"
        required
        onChange={props.onChange}
      />
      <Input
        title="Entidad Federativa o Estado"
        type="text"
        name="entidadFederativaEstado"
        required
        onChange={props.onChange}
      />
      <Input
        title="País"
        type="text"
        name="pais"
        required
        onChange={props.onChange}
      />
      <Input
        title="Numero Telefónico del Domicilio"
        type="number"
        name="numeroTelefono"
        required
        onChange={props.onChange}
      />
      <InputFile
        title="Comprobante de Domicilio"
        name="comprobante"
        required
        onChange={props.onChange}
      />
        </>
     );
}
 
export default DomicilioInputs;