import React, { Component } from 'react';
                   
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from './../../sucursales.json';
import './List.css';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: Pages,
     
    }
  }
 
  render() {
   
    let links = null;

    links = (
      <div >
        {this.state.pages.map((page,index) => {
       
          if (page.slug !== "") {
            return <div className="container wrapList" key={page.id}>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                  
                  <div className="panel panel-primary">
                    <div className="panel-heading">{page.nombreSucursal}</div>
                      <div className="panel-body">
                        <a href={"#"+page.slug} >{"instacredit.com/sucursales/#"+page.slug}</a>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
          }else{
            return null;
          }
        })};
      </div>
    );



    return (
        <div className="container-fluid List">
            <div className="col-12">
                <div className="row wrapList">
                    
                    <div className="col-12">
                        <div className="text-center">
                            <h1>Sucursales</h1>
                        </div>
                        
                    </div>
                </div>
                {links}   
            </div>   
        </div>   
      
    );
  }
}

export default List;
