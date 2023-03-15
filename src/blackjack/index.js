import _ from 'underscore';

import { createNewDeck, requestNewCard, giveValueCard, turnComputer, createCardHTML } from './usercases';
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let     deck       = [];
const   types      = ['C','D','H','S'],
        special    = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const   btnPedir    = document.querySelector('#btnPedir'),
        btnDetener  = document.querySelector('#btnDetener'),
        btnNuevo     = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = createNewDeck(types, special);

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = requestNewCard( deck);
    
    puntosJugador = puntosJugador + giveValueCard( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = createCardHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnComputer( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnComputer( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnComputer( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    
    deck = createNewDeck(types, special);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
