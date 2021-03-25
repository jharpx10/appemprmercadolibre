
import { sendAPIQgetJSON } from './infraestructureServices'
const baseUrl = 'https://api.mercadolibre.com/users'
export async function getSellerById(sellerId) {
    return await  sendAPIQgetJSON(`${baseUrl}/${sellerId}`)
}
  export async function getSellerNicknameById(sellerId) {
    const seller=await getSellerById(sellerId);
    const nickname=await seller.nickname;
    return await nickname;
  }


  