import React, { Component } from 'react';
import './GraciasPage.css';

class GraciasPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  
    
    render() {
        const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');
        const cssWrap = [
            "wrapFormGracias",
            this.props.toggleGracias ? "wrapFromOpenGracias" : "wrapFromClosedGracias"
        ];

        return (
          
            <div className={cssWrap.join(' ')}>
                <div className="GraciasPage">
                    <div className="modalForm">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="text-center">
                                    <img src={require('../../images/logo.png')}  alt="Instacredit" className="headerImageWrapGracias" />
                                    
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="text-center">
                                    <h4>Muchas Gracias por su Interés</h4>
                                    <h4>Uno de nuestros agentes lo estará contactando muy pronto para formalizar su solicitud.</h4>
                                </div>
                            </div>
                        </div>



                      

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group text-center" >
                                    <a href="http://instacredit.com" className="btn btn-block button-aceptar">Aceptar</a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group text-center" >
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
                                        <a href={"tel:+506"+hrefTelefonoPrincipal}>
                                        <img src={require('../../images/icons/phoneWhite.png')}  alt="Telefono" 
                                        className="imageIcon"  style={{'display':'inline-block'}}/>
                                            <h3 style={{'color':'#fff' }} style={{'display':'inline-block'}}>{"+506 "+this.props.telefonoPrincipal}</h3>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
          
        );
    
    }
}
      


export default GraciasPage;
