import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {Array<String>} typesCards    example: ['C','D','H','S'];
 * @param {Array<String>} specialCards  example: ['A','J','Q','K'];
 * @returns {Array<String>}  new deck of poker cards returns
 */

export const createDeck = ( typesCards, specialCards )=> {

    if ( !typesCards || typesCards.length === 0 )
    throw new Error(' typesCards are mandatory with a string array!! ');

    if ( !specialCards || specialCards.length === 0 )
    throw new Error(' specialCards are mandatory with a string array!! ');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of typesCards ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of typesCards ) {
        for( let esp of specialCards ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;

}
