export async function sendAPIQgetJSON(APIQuery) {
    const response = await fetch(APIQuery);
    const responseJson = await response.json()
    return await responseJson
  }
  export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  export const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });