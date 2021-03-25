export async function sendAPIQgetJSON(APIQuery) {
    const response = await fetch(APIQuery);
    const responseJson = await response.json()
    return await responseJson
  }
  