import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    
    render() {

        return (
            <div>
                <div className="row  buttons text-center ">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <button 
                            className="btn btn-block button-solicitud" 
                            >
                                SOLICITE SU CREDITO 
                                <i className="glyphicon glyphicon-menu-down pull-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <button 
                            className="btn btn-block button-solicitud" 
                            >
                                CONOZCA NUESTROS SERVICIOS 
                                <i className="glyphicon glyphicon-menu-down pull-right"></i>
                            </button>
                        </div>
                    </div>
                    
                </div>
                
               
      
                </div>
            
        


        );
    } 
  
  
}

export default Buttons;
