import React, { Component } from 'react';
import './CreditForm.css';
import GraciasPage from '../GraciasPage/GraciasPage';
import $ from 'jquery';
import {sucursalFormSubmit, sucursalFormError} from '../gtm/gmt';

class CreditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            cedula: '',
            telefono: '',
            mail: '',
            monto: '',
            contacto: '',
            showGracias: false
        };
    }

    toggleFormGracias = () => {
        const doesShow = this.state.showGracias;
        this.setState({showGracias: !doesShow});
    }

    handleChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
  
        $.ajax({ // registryUser Request
            type: "POST",
            url: 'https://www.instacredit.com/sucursales/sendMail.php',
            dataType: 'json',
            data: {
                    functionname: 'sendMail', 
                    arguments: [
                        this.state.nombre,
                        this.state.cedula,
                        this.state.telefono,
                        this.state.mail,
                        this.state.monto,
                        this.state.contacto,
                        this.props.nombreSucursal
                    ]
                },   
            cache: false,
            success: function (obj, textstatus) {
                const doesShow = this.state.showGracias;
                this.setState({showGracias: !doesShow});
                { sucursalFormSubmit(this.props.nombreSucursal) } 
            }.bind(this),
            error: function( error ){
                alert("Lo lamentamos no se pudo enviar tu solicitud");
                console.log( "ERROR:", error );
                { sucursalFormError(this.props.nombreSucursal) } 
            }         
        });
			
		
    }
    
    render() {
        const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');

        const cssWrap = [
            "wrapForm",
            this.props.toggle ? "wrapFromOpen" : "wrapFromClosed"
        ];
        return (
            <div>
                <div className={cssWrap.join(' ')}>
                    <div className="CreditForm">
                            <div className="modalForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="text-right">
                                        <button className="btn" onClick={this.props.click}> <i className="glyphicon glyphicon-remove"></i></button>
                                            
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="text-center">
                                                <h4>Complete el siguiente formulario para ser</h4>
                                                <h4>atendido por nuestros asesores de crédito:</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" className="form-control inputForm" 
                                                    name="nombre"  placeholder="Nombre y Apellidos"
                                                    onChange={this.handleChange}
                                                required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" className="form-control inputForm" 
                                                    name="cedula" placeholder="Cédula 0-0000-0000" 
                                                    onChange={this.handleChange}
                                                required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" className="form-control inputForm" 
                                                    name="telefono" placeholder="Teléfono" 
                                                    onChange={this.handleChange}
                                                required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" className="form-control inputForm" 
                                                    name="mail"  placeholder="Correo electrónico personal" 
                                                    onChange={this.handleChange}
                                                required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <select className="form-control inputForm" name="monto" onChange={this.handleChange} required>
                                                    <option value="" disabled selected>Seleccione el monto de su préstamo</option>
                                                    <option value="De ¢75.000 a ¢1.000.000">De ¢75.000 a ¢1.000.000</option>
                                                    <option value="De ¢1.000.000 a ¢2.000.000">De ¢1.000.000 a ¢2.000.000</option>
                                                    <option value="De ¢2.000.000 a ¢3.000.000">De ¢2.000.000 a ¢3.000.000</option>
                                                </select>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <select className="form-control inputForm" name="contacto" onChange={this.handleChange} required>
                                                    <option value="" disabled selected>Seleccione el modo de contacto</option>
                                                    <option value="Correo electrónico">Correo electrónico</option>
                                                    <option value="Llamada telefónica">Llamada telefónica</option>
                                                    <option value="WhatsApp">WhatsApp</option>
                                                </select>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group text-center" >
                                                <button type="submit" className="btn btn-block button-solicite" id="btn_send"><strong>SOLICITE SU CRÉDITO</strong></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group text-center" >
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
                                                    <a href={"tel:+506"+hrefTelefonoPrincipal}>
                                                    <img src={require('../../images/icons/phoneBlue.png')}  alt="Telefono" 
                                                    className="imageIcon"  style={{'display':'inline-block'}}/>
                                                        <h3 style={{'color':'#404040' }} style={{'display':'inline-block'}}>{"+506 "+this.props.telefonoPrincipal}</h3>
                                                
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <GraciasPage 
                            toggleGracias={this.state.showGracias} 
                            telefonoPrincipal={this.props.telefonoPrincipal}
                    />
                </div>
          
        );
    
    }
}
      


export default CreditForm;
