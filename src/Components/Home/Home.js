import React, { Component } from 'react';
import Pages from './../../sucursales.json';

import Header from '../Header/Header';
import DropDown from '../DropDown/DropDown';
import DropDownInfo from '../DropDownInfo/DropDownInfo';
import DropDownInfoDesktop from '../DropDownInfoDesktop/DropDownInfoDesktop';
import gtm from '../gtm/gmt';
import {Helmet} from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: Pages,
      width: window.innerWidth,
    }
  }


  componentWillMount() {
    document.title = this.props.nombreSucursal;
  }

  
  changePages = () => {
    // const persons = this.state.persons.slice();
    const pages = [...this.state.pages];

    pages.map((page,index) => 
      page.provincia !== this.props.provincia && page.distrito !== this.props.dustrito ?
        pages.splice(index, 1)
    : null)
   
    this.setState({pages : pages});
   
  }

  contSucursales = () => {
    let numSucursales = 0;
    this.state.pages.map((page,index) => 
      page.provincia === this.props.provincia && page.distrito === this.props.distrito ? numSucursales++: null);
    
    return numSucursales;
  }


  checkSchemas = () => {
    let numSucursales = 0;
    numSucursales = this.contSucursales();
   
    let schemasorg = "";
    let contSucursalesLoop = 0;

    this.state.pages.map((page,index) => 
    {  
      
      if (page.provincia === this.props.provincia && page.distrito === this.props.distrito && numSucursales !== 1 ){
        contSucursalesLoop++;
        if (contSucursalesLoop >= numSucursales ) {
          schemasorg = schemasorg +JSON.stringify({
            "@context" : "http://schema.org",
            "@type" : "LocalBusiness",
            "url": "https://www.instacredit.com/sucursales/#"+page.slug,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": page.distrito + ', '+ page.provincia + ', Costa Rica',
              "streetAddress": page.direccion1
            },
            "name":"Sucursal "+ page.dropdown,
            "telephone": "+506 "+page.telefonoPrincipal,
            "openingHours": [
              "Lunes: "+ page.lunes,
              "Martes: "+ page.martes,
              "Miércoles: "+ page.miercoles,
              "Jueves: "+ page.jueves,
              "Viernes: "+page.viernes,
              "Sábado: "+page.sabado,
            ],
            "image":"https://www.instacredit.com/sucursales/static/media/logo.d3b6bf94.png",
    
          });
        } else {
          schemasorg = schemasorg +JSON.stringify({
            "@context" : "http://schema.org",
            "@type" : "LocalBusiness",
            "url": "https://www.instacredit.com/sucursales/#"+page.slug,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": page.distrito + ', '+ page.provincia + ', Costa Rica',
              "streetAddress": page.direccion1
            },
            "name":"Sucursal "+ page.dropdown,
            "telephone": "+506 "+page.telefonoPrincipal,
            "openingHours": [
              "Lunes: "+ page.lunes,
              "Martes: "+ page.martes,
              "Miércoles: "+ page.miercoles,
              "Jueves: "+ page.jueves,
              "Viernes: "+page.viernes,
              "Sábado: "+page.sabado,
            ],
            "image":"https://www.instacredit.com/sucursales/static/media/logo.d3b6bf94.png",
    
          })+",";
          
        }
      }else if (numSucursales === 1){

        schemasorg = JSON.stringify({
          "@context" : "http://schema.org",
          "@type" : "LocalBusiness",
          "url": "https://www.instacredit.com/sucursales/#"+this.props.slog,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": this.props.distrito + ', '+ this.props.provincia + ', Costa Rica',
            "streetAddress": this.props.direccion1
          },
          "name":"Sucursal "+ this.props.nombreSucursal,
          "telephone": "+506 "+this.props.telefonoPrincipal,
          "openingHours": [
            "Lunes: "+ this.props.lunes,
            "Martes: "+ this.props.martes,
            "Miércoles: "+ this.props.miercoles,
            "Jueves: "+ this.props.jueves,
            "Viernes: "+this.props.viernes,
            "Sábado: "+this.props.sabado,
          ],
          "image":"https://www.instacredit.com/sucursales/static/media/logo.d3b6bf94.png",
  
        });
      }
    }
    
    );
    return schemasorg;
  }
  
  
  render() {

    this.changePages;
    let numSucursales = 0;
    numSucursales = this.contSucursales();

    let pagesNew = null;
    const { width } = this.state;
    const isMobile = width <= 500;
    const hrefTelefonoPrincipal = this.props.telefonoPrincipal.replace(/-/g, '');
    const hrefWhastspp = this.props.whastspp.replace(/-/g, '');


    const url = '/sucursales/#'+this.props.slog;
  
    const schemaorg = this.checkSchemas();
   
   
    const Schemas =   {
      type: 'application/ld+json',
      innerHTML: "["+schemaorg+"]"
    };
    console.log(Schemas);
   
    if (isMobile) {
      pagesNew = (
        <div>
          {this.state.pages.map((page,index) => 
            page.provincia === this.props.provincia && page.distrito === this.props.distrito ?
              numSucursales !== 1 ?
                <DropDown 
                  key={page.id}
                  provincia={page.provincia}
                  maps={page.maps}
                  telefonoPrincipal={page.telefonoPrincipal}
                  whastspp={page.whastspp} 
                  direccion1={page.direccion1}
                  waze={page.waze}
                  lunes={page.lunes}
                  martes={page.martes}
                  miercoles={page.miercoles}
                  jueves={page.jueves}
                  viernes={page.viernes}
                  sabado={page.sabado}
                  nombreSucursal={page.nombreSucursal}
                  servicios={page.servicios}
                  dropdown={page.dropdown} 
                />
              : <DropDownInfo 
                  key={page.id}
                  provincia={page.provincia}
                  maps={page.maps}
                  telefonoPrincipal={page.telefonoPrincipal}
                  whastspp={page.whastspp} 
                  direccion1={page.direccion1}
                  waze={page.waze}
                  lunes={page.lunes}
                  martes={page.martes}
                  miercoles={page.miercoles}
                  jueves={page.jueves}
                  viernes={page.viernes}
                  sabado={page.sabado}
                  nombreSucursal={page.nombreSucursal} 
                  servicios={page.servicios}
                />
            : null
            )
          } 
        </div>
      );
  
  
      return (
        <div className="container-fluid">
       
        <span style={{display: 'none'}}>{gtm(url, this.props.nombreSucursal)}</span>
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Header 
                    telefonoPrincipal={this.props.telefonoPrincipal}
                    whastspp={this.props.whastspp} 
                    empresa={this.props.empresa}
                    distrito={this.props.distrito}
                    provincia={this.props.provincia}
                    pais={this.props.pais} 
                />
                {pagesNew}
                
              </div>
          </div>
        </div>
      );
  
    

    }else{

      pagesNew = (
        <div>
          {this.state.pages.map((page,index) => 
            page.provincia === this.props.provincia && page.distrito === this.props.distrito ?
              numSucursales !== 1 ?
                <DropDown 
                  key={page.id}
                  provincia={page.provincia}
                  maps={page.maps}
                  telefonoPrincipal={page.telefonoPrincipal}
                  whastspp={page.whastspp} 
                  direccion1={page.direccion1}
                  waze={page.waze}
                  lunes={page.lunes}
                  martes={page.martes}
                  miercoles={page.miercoles}
                  jueves={page.jueves}
                  viernes={page.viernes}
                  sabado={page.sabado}
                  nombreSucursal={page.nombreSucursal}
                  servicios={page.servicios} 
                  dropdown={page.dropdown} 
                />
              : <DropDownInfoDesktop 
                  key={page.id}
                  provincia={page.provincia}
                  maps={page.maps}
                  telefonoPrincipal={page.telefonoPrincipal}
                  whastspp={page.whastspp} 
                  direccion1={page.direccion1}
                  waze={page.waze}
                  lunes={page.lunes}
                  martes={page.martes}
                  miercoles={page.miercoles}
                  jueves={page.jueves}
                  viernes={page.viernes}
                  sabado={page.sabado}
                  nombreSucursal={page.nombreSucursal} 
                  servicios={page.servicios}
                />
            : null
            )
          } 
        </div>
      );
   
      
      return (
        <div className="container-fluid">
        <Helmet script={[Schemas]} />
        <span style={{display: 'none'}}>{gtm(url, this.props.nombreSucursal)}</span>
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Header 
                    telefonoPrincipal={this.props.telefonoPrincipal}
                    whastspp={this.props.whastspp} 
                    empresa={this.props.empresa}
                    distrito={this.props.distrito}
                    provincia={this.props.provincia}
                    pais={this.props.pais} 
                />
                {pagesNew}
                
              </div>
          </div>
        </div>
      );
  
    }

    }
}
  

export default Home;
