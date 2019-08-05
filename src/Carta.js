import React, { Component } from 'react';
import './Carta.css';
//instalar modulo npm para el flip
//npm install --save react-flipcard
//import FlipCard from 'react-flipcard';
//const FlipCard = require('react-flipcard');
import FlipCard from 'react-flipcard-2';



export default class Carta extends Component {
    render(){
        return(
            <div className="carta" 
                onClick={this.props.seleccionarCarta}>
                <FlipCard
                    flipped={this.props.estaSiendoComparada 
                        || this.props.fueAdivinada}
                    disabled={true}
                
                >
                   <div className="portada"></div> 
                   <div className="contenido">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                   </div>
                </FlipCard>
               
            </div>
        );
    }
}