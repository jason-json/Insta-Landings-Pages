import React, { Component } from 'react';
import './DropDown.css';
import DropDownInfo from'../DropDownInfo/DropDownInfo';
import DropDownInfoDesktop from'../DropDownInfoDesktop/DropDownInfoDesktop';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSucursal: false,
            classArrow: 'glyphicon glyphicon-menu-down pull-right',
            width: window.innerWidth,
        };
    }

    toggleSucursalHandler = () => {
        if(this.state.classArrow === 'glyphicon glyphicon-menu-down pull-right' ){
            this.setState({classArrow: 'glyphicon glyphicon-menu-up pull-right'});
        }else{
            this.setState({classArrow: 'glyphicon glyphicon-menu-down pull-right'});
            
        }
        const doesShow = this.state.showSucursal;
        this.setState({showSucursal: !doesShow});
    }

   
    
    render() {
        let info = null;
        const { width } = this.state;
        const isMobile = width <= 500;
        const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');
        const hrefWhastspp = this.props.whastspp.replace(/-/g, '');
        if (isMobile) {
            if (this.state.showSucursal) {
                info = (
                  <div>
                    <DropDownInfo
                        maps={this.props.maps}
                        telefonoPrincipal={this.props.telefonoPrincipal}
                        whastspp={this.props.whastspp}
                        direccion1={this.props.direccion1}
                        waze={this.props.waze}
                        lunes={this.props.lunes}
                        martes={this.props.martes}
                        miercoles={this.props.miercoles}
                        jueves={this.props.jueves}
                        viernes={this.props.viernes}
                        sabado={this.props.sabado}
                        nombreSucursal={this.props.nombreSucursal}
                        closed={this.state.showSucursal} 
                        servicios={this.props.servicios}
                        dropdown={this.props.dropdown}
                    />
                   
                  </div>
                );
            }

        }else{
            if (this.state.showSucursal) {
                info = (
                  <div>
                    <DropDownInfoDesktop
                        maps={this.props.maps}
                        telefonoPrincipal={this.props.telefonoPrincipal}
                        whastspp={this.props.whastspp}
                        direccion1={this.props.direccion1}
                        waze={this.props.waze}
                        lunes={this.props.lunes}
                        martes={this.props.martes}
                        miercoles={this.props.miercoles}
                        jueves={this.props.jueves}
                        viernes={this.props.viernes}
                        sabado={this.props.sabado}
                        nombreSucursal={this.props.nombreSucursal}
                        closed={this.state.showSucursal} 
                        servicios={this.props.servicios}
                        dropdown={this.props.dropdown}
                    />
                   
                  </div>
                );
            }
        }
        return (
            <div className="row">
                <div className="gradient">
                    <div className="DropDown">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding text-center">
                            <button 
                            className="btn_dropdown" 
                            onClick={this.toggleSucursalHandler}>
                                {this.props.dropdown} 
                                <i className={this.state.classArrow}></i>
                            </button>
                            
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center">
                            {info}
                            {/* <CreditForm/> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
  
  
}

export default DropDown;
