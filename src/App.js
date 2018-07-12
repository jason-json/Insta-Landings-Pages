import React, { Component } from 'react';
                   
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from './sucursales.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import List from './Components/List/List';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: Pages,
     
    }
  }
 
  render() {
    let routes = null;
    routes = (
      <div >
        {this.state.pages.map((page,index) => {
          if (page.slug !== "") {
            return <Route  
            path={page.slug} 
            key={page.id} 
            render={()=><Home
              telefonoPrincipal={page.telefonoPrincipal}
              whastspp={page.whastspp} 
              empresa={page.empresa}
              distrito={page.distrito}
              provincia={page.provincia}
              pais={page.pais} 
              nombreSucursal={page.nombreSucursal}
              maps={page.maps}
              direccion1={page.direccion1}
              waze={page.waze}
              lunes={page.lunes}
              martes={page.martes}
              miercoles={page.miercoles}
              jueves={page.jueves}
              viernes={page.viernes}
              sabado={page.sabado}
              servicios={page.servicios}
              slog={page.slug}
              dropdown={page.dropdown}
              />}
            
            />
            
          }else{
            return null;
          }
          
        })}
      </div>
    );

    


    return (
      <Switch>
       
          <Route exact path="/lista" 
            key="root" 
            component={List}
          /> 
          {routes}
         
      </Switch>      
      
    );
  }
}

export default App;
