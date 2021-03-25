import { getSellerNicknameById } from './sellerServices'
import { sendAPIQgetJSON } from './infraestructureServices'


const baseUrl = 'https://api.mercadolibre.com/'
const productsPerPage = 9;



export async function getProductsBySearch(searchQuery) {
  const responseJson = await sendAPIQgetJSON(`${baseUrl}sites/MCO/search?q=${searchQuery}&offset=0&limit=${productsPerPage}`)
  const totalProducts = await totalProductsStrategy(await responseJson.paging);
  responseJson.pageCount = Math.ceil(totalProducts / productsPerPage);

  await setSellersNickname(await responseJson.results)
  return await responseJson
}

export async function totalProductsStrategy(paginInfo) {
  const paginTotal = await paginInfo.total;
  const paginPR = await paginInfo.primary_results;

  const totalP =await  noAccesTokenTotalProductsStrategy(await paginTotal, await paginPR)
      return await totalP
}

export async function noAccesTokenTotalProductsStrategy(paginTotal,paginPR) {
  if(await paginTotal>await paginPR){
    return await paginPR
  }
  return await paginTotal;
}


export async function getProductDescription(productId) {
  const description = await sendAPIQgetJSON(`${baseUrl}items/${productId}/description`)
  const descriptionPT = await description.plain_text;
  return descriptionPT;
}

export async function getProductReviews(productId) {
  return await sendAPIQgetJSON(`${baseUrl}reviews/item/${productId}`);;
}

export async function getProductDetails(productId) {

  const gDetails = await getProductGeneralDetails(productId)
  gDetails.description = await getProductDescription(productId)
  gDetails.reviews = await getProductReviews(productId)
  gDetails.sellerNickname = await getSellerNicknameById(await gDetails.seller_id)

  return await gDetails
}
export async function getProductGeneralDetails(productId) {
  return await sendAPIQgetJSON(`${baseUrl}items/${productId}`)
}


async function setSellersNickname(results) {
  for (var i = 0; i < await results.length; i++) {
    await setSellerNickname(await results[i])
  }
  return await results
}


async function setSellerNickname(productInfo) {
  productInfo.sellerNickname = await getSellerNicknameById(productInfo.seller.id)
  return await productInfo
}

export async function getProductsByPagination(page, search) {
  const responseJson = await sendAPIQgetJSON(`${baseUrl}sites/MCO/search?q=${search}&offset=${page * productsPerPage}&limit=${productsPerPage}`)
  await setSellersNickname(await responseJson.results)
  return await responseJson
}
