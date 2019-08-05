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
    baraja,
    //max dos elementos, ya que vamos a comparar dos cartas
    parejaSeleccionada: [],
    //este evitará que el usuario elija mas de dos cartas
    estaComparando: false
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
       parejaSeleccionada={this.state.parejaSeleccionada}
       seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
       />
      </div>
    );
  }
  seleccionarCarta(carta){
    //las condiciones en las que el usuario no debería seleccionar cartas
    if(
      this.state.estaComparando || 
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ){
      return;
    }
    //actualizar el array y empujar la nueva carta
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });
    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }
  compararPareja(parejaSeleccionada){
    this.setState({
      estaComparando: true
    });

    setTimeout(()=>{
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if(primeraCarta.icono === segundaCarta.icono){
        baraja = baraja.map((carta) => {
          if(carta.icono !== primeraCarta.icono){
            console.log(carta, 'soy la carta diferente');
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false

      }, ()=>{console.log(parejaSeleccionada, baraja)})

    }, 1000)
  }
}

export default App;
