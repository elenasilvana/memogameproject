import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';

//esta funcion retorna el estado de la aplicación
const getEstadoInicial = () => {
  //generar baraja
  const baraja = construirBaraja();
  return{
    baraja
  };
}

class App extends Component {
  constructor(props){
    super(props);
    this.state=getEstadoInicial();

  }
  render(){
    return (
      <div className="App">
       <Header />
       <Tablero 
       baraja={this.state.baraja}
       />
      </div>
    );
  }
}

export default App;
