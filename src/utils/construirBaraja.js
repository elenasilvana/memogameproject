import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const NUMERO_DE_CARTAS = 6;



export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];

    while (cartas.length < NUMERO_DE_CARTAS){
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const carta = {
            //se usa el metodo splice para extraer la carta 
            //que esté en el indice que generamos aleatoriamente
            //devuelve un array con un solo elemento
            icono: fontAwesomeClasses.splice(index, 1)[0],
            //esto nos permite marcarlo como true cuando el usuario
            //haya encoontrado el par de la carta
            fueAdivinada: false
        };
        //para empujar la carta a la baraja
        cartas.push(carta);
        //clonamos la carta para contar con las mismas propiedades pero contar
        //con dos objetos diferentes
        cartas.push({...carta});
    }
    return shuffle(cartas);
    //para revolver las cartas se instala una libreria
    //npm install --save lodash.shuffle
};