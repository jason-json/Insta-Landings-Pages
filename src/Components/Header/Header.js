import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            showSucursal: false
        }
    }
    render() {

        const { width } = this.state;
        const isMobile = width <= 500;
        // const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');
        // const hrefWhastspp = this.props.whastspp.replace(/-/g, '');
    
        if (isMobile) {
            return (
                <div>
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerImage ">
                            <div className="headerImageWrap text-center">
                                <h3 >Crédito Fácil y Rápido</h3>
                                <img src={require('../../images/logo.png')} className="img-headerImageWrap" alt="Instacredit"/>
                                <h2>Preaprobados en 1 hora</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerTitle ">
                            <h3 className="titleText1">{this.props.empresa}, {this.props.distrito}</h3>
                            <h3 className="titleText2">{this.props.provincia}, {this.props.pais}</h3>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    
                    {/* <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerPhones ">
                            <div className="headerPhonesWrap">
                                <div className="text-right">
                                    <a href={"tel:+506"+hrefTelefonoPrincipal}><h3><img src={require('../../images/icons/phoneWhiteSmall.png')} className="img-header" alt=""/><strong> {this.props.telefonoPrincipal} </strong></h3></a>
                                    <a href={"https://api.whatsapp.com/send?phone=506"+hrefWhastspp}><h3><img src={require('../../images/icons/whatsappWhiteSmall.png')} className="img-header" alt=""/><strong> {this.props.whastspp} </strong></h3></a> 
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerImage">
                            <div className="headerImageWrap">
                                <h3 >Crédito Fácil y Rápido</h3>
                                <img src={require('../../images/logo.png')} className="img-headerImageWrap" alt="Instacredit"/>
                                <h2>Pre-aprobados en 1 hora</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headerTitle">
                            <div className="title">
                                <h3 className="titleText1">{this.props.empresa}, {this.props.distrito}</h3>
                                <h3 className="titleText2">{this.props.provincia}, {this.props.pais}</h3>
                            </div>
                        </div>
                    </div>

                    

                </div>
            
            );
        }
    
    }
}

export default Header;
