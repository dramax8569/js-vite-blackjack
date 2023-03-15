import { requestNewCard, giveValueCard, createCardHTML } from './'; 

/** 
 * 
 * @param {Number} minimunPoints minimum points the computer needs to win
 * @param {HTMLElement} puntosHTML HTML for show the numbers
 * @param {HTMLElement} divCartasComputadora HTML element for show the poker cards
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnComputer = ( minimunPoints, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !minimunPoints ) throw new Error(' minimum points are necessary');
    if ( !puntosHTML ) throw new Error(' puntosHTML argument is necessary');

    let puntosComputadora = 0;

    do {
        const carta = requestNewCard( deck );

        puntosComputadora = puntosComputadora + giveValueCard( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = createCardHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( minimunPoints > 21 ) {
            break;
        }

    } while(  (puntosComputadora < minimunPoints)  && (minimunPoints <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === minimunPoints ) {
            alert('Nadie gana :(');
        } else if ( minimunPoints > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}