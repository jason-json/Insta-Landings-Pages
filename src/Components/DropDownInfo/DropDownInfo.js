import React, { Component } from 'react';
import './DropDownInfo.css';
import CreditForm from '../CreditForm/CreditForm';
import {DLtoogle, sucursalFormOpen, sucursalFormClose} from '../gtm/gmt';


class DropDownInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHorario: false,
            showDay: false,
            day: "Domingo",
            showFrom: false,
            classArrowHorario: 'glyphicon glyphicon-menu-down pull-right',
        };
       
    }

    toggleHorarioHandler = () => {
        if(this.state.classArrowHorario === 'glyphicon glyphicon-menu-down pull-right' ){
            this.setState({classArrowHorario: 'glyphicon glyphicon-menu-up pull-right'});
        }else{
            this.setState({classArrowHorario: 'glyphicon glyphicon-menu-down pull-right'});
            
        }
        const doesShow = this.state.showHorario;
        this.setState({showHorario: !doesShow});
      
        { DLtoogle(this.props.nombreSucursal) }   

       
    }

    toggleForm = () => {
        const doesShow = this.state.showFrom;
        if (!doesShow) {
            { sucursalFormOpen(this.props.nombreSucursal) }
        }else{
            { sucursalFormClose(this.props.nombreSucursal) }
        }
        this.setState({showFrom: !doesShow});

    }

    
    render() {
        const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');
        const hrefWhastspp = this.props.whastspp.replace(/-/g, '');
    
        let buttons = null;
        buttons = (
            <div>
                <div className="row buttons ">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="row text-center">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <button 
                                className="btn btn-block button-solicite"
                                onClick={this.toggleForm} 
                                >
                                    <strong>SOLICITE SU CRÉDITO </strong>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <a 
                                className="btn btn-block button-conozca" 
                                href={"https://"+this.props.servicios}
                                >
                                    <strong>CONOZCA NUESTROS SERVICIOS</strong> 
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
        
        let horario = null;
        if (this.state.showHorario) {
            horario = (
              <div className="row horarios ">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Lunes:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.lunes}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Martes:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.martes}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Miércoles:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.miercoles}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Jueves:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.jueves}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Viernes:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.viernes}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Sábado:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>{this.props.sabado}</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <p><strong>Domingo:</strong></p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <p>8:30 AM - 6:00 PM</p>
                    </div>
                </div> */}
              </div>
            );
        }

        let form = null;
        if (this.state.showFrom) {
            form = (
                <CreditForm nombreSucursal={this.props.nombreSucursal} click={this.toggleForm}/>
            );
        }

        let containerClass = [
            'row', 
            this.props.closed ? 'DropDownInfoShow':'DropDownInfoHide'
        ];

        
        
        
        return (
       
            <div className={containerClass.join(' ')}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
                    <div className="DropDownInfo">
                        <div className="row  contact text-center ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                                    <a href={"https://"+this.props.maps}>
                                        <img src={require('../../images/icons/Gps.png')}  alt="Ubicacion" className="imageIcon"/>
                                        <span  className="displayBlock">Ubicación</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                                    <a href={"tel:+506"+hrefTelefonoPrincipal}>
                                        <img src={require('../../images/icons/phoneBlue.png')} className="imageIcon" width="40" alt=""/>
                                        <span  className="displayBlock">{this.props.telefonoPrincipal}</span>
                                    </a>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                                    <a href={"https://api.whatsapp.com/send?phone=506"+hrefWhastspp}>
                                        <img src={require('../../images/icons/whatsappBlue.png')} className="imageIcon" width="40" alt=""/>
                                        <span  className="displayBlock">{this.props.whastspp}</span>
                                    </a>

                                </div>
                        
                        </div>
                        <div className="row nopadding">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding">
                                <div className="fieldInfo">
                                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 nopadding">
                                        <img src={require('../../images/icons/gpsWhite.png')}  alt="Ubicacion" className="imageIconInfo"/>
                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 nopadding">
                                        <h4>{this.props.direccion1}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding">
                                <div className="fieldInfo">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">
                                        <img src={require('../../images/icons/wazeWhite.png')}  alt="Waze" className="imageIconInfo"/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 nopadding">
                                        <a href={this.props.waze}><h4>Ver en waze</h4></a>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
                        className="dropdownInput" 
                        onClick={this.toggleHorarioHandler}>
                            Horario 
                            <i className={this.state.classArrowHorario}></i>
                        </button>
                        {horario}
                        {buttons}
                        <CreditForm 
                            nombreSucursal={this.props.nombreSucursal} 
                            toggle={this.state.showFrom} 
                            click={this.toggleForm}
                            telefonoPrincipal={this.props.telefonoPrincipal}
                        />
                        {/* {form} */}
                    </div>
                </div>
            </div>
            
        


        );
    } 
  
}


export default DropDownInfo;
