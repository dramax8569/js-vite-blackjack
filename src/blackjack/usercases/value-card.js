
/**
 * 
 * @param {*} carta 
 * @returns 
 */

export const valueCard = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}