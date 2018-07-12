import React, { Component } from 'react';
import './DropDownInfoDesktop.css';
import CreditForm from '../CreditForm/CreditForm';
import {DLtoogle, sucursalFormOpen, sucursalFormClose} from '../gtm/gmt';


class DropDownInfoDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHorario: false,
            showDay: false,
            day: "Domingo",
            showFrom: false,
            classArrowHorario: 'glyphicon glyphicon-menu-down',
        };
       
    }

    toggleHorarioHandler = () => {
        if(this.state.classArrowHorario === 'glyphicon glyphicon-menu-down' ){
            this.setState({classArrowHorario: 'glyphicon glyphicon-menu-up'});
        }else{
            this.setState({classArrowHorario: 'glyphicon glyphicon-menu-down'});
            
        }
        const doesShow = this.state.showHorario;
        this.setState({showHorario: !doesShow});

        { DLtoogle(this.props.nombreSucursal) }   
    }   

    toggleForm = () => {
        const doesShow = this.state.showFrom;
        if (doesShow) {
            { sucursalFormClose(this.props.nombreSucursal) }
        }else{
            { sucursalFormOpen(this.props.nombreSucursal) }
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
              <div className="row horariosDesktop ">
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
                    <div className="DropDownInfoDesktop">
                        <div className="row  nopadding text-center ">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nopadding">
                                <div className="fieldInfoDesktop">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                        <img src={require('../../images/icons/Gps.png')}  alt="Ubicacion" className="imageIcon"/>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                       <h4 style={{'color':'#404040'}}>{this.props.direccion1}</h4>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="row nopadding text-center">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding">
                                    <div className="fieldInfoDesktop">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                            <img src={require('../../images/icons/waze.png')}  alt="Waze" className="imageIcon"/>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                            <a href={this.props.waze}><h4>Ver en waze</h4></a>
                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding">
                                    <div className="fieldInfoDesktop">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                            <img src={require('../../images/icons/Gps.png')}  alt="Ubicacion" className="imageIcon"/>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                            <a href={this.props.maps}><h4>Ver en Google Maps</h4></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row nopadding text-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nopadding">
                                <div className="fieldInfoDesktop">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                        <img src={require('../../images/icons/phoneBlue.png')}  alt="Ubicacion" className="imageIcon"/>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                        <a href={"tel:+506"+hrefTelefonoPrincipal}>
                                            <h3 style={{'color':'#404040' }}>{"+506 "+this.props.telefonoPrincipal}</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nopadding">
                                <div className="fieldInfoDesktop">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                        <img src={require('../../images/icons/whatsappBlue.png')}  alt="Whatsapp" className="imageIcon"/>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                        <a href={"https://api.whatsapp.com/send?phone=506"+hrefWhastspp}>
                                            <h3 style={{'color':'#404040' }}>{"+506 "+this.props.whastspp}</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  nopadding  ">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nopadding">
                                <div className="fieldInfoDesktop">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">
                                        <img src={require('../../images/icons/clock-new.png')}  alt="Ubicacion" className="imageIcon"/>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 nopadding">
                                            <button 
                                        className="dropdownInputDesktop " 
                                        onClick={this.toggleHorarioHandler}
                                        >
                                            <span style={{'marginRight':'5%'}}>Horario</span>   
                                            <i className={this.state.classArrowHorario} ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    

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


export default DropDownInfoDesktop;
