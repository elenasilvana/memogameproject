import React, { Component } from 'react';
import './Carta.css';
//instalar modulo npm para el flip
//npm install --save react-flipcard
//import flipcard from 'react-flipcard';
const FlipCard = require('react-flipcard');

/* 
  <FlipCard>
                   <div className="portada"></div> 
                   <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                   </div>
                </FlipCard>
*/


export default class Carta extends Component {
    render(){
        return(
            <div className="carta">
                <FlipCard>
                   <div className="portada"></div> 
                   <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                   </div>
                </FlipCard>
               
            </div>
        );
    }
}