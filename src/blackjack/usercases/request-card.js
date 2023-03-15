
/**
 * This function allows me to take a poker card
 * @param {Array<String>} deck is a string array
 * @returns {<String>} the deck card is return
 */

export const requestCard = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

