import { getSellerNicknameById } from './sellerServices'
import { sendAPIQgetJSON,getRandomArbitrary} from './infraestructureServices'
import { totalProductsStrategy } from './strategy'

const baseUrl = 'https://api.mercadolibre.com/'
const productsPerPage = 9;

export async function getProductsBySearch(searchQuery) {
  const responseJson = await sendAPIQgetJSON(`${baseUrl}sites/MCO/search?q=${searchQuery}&offset=0&limit=${productsPerPage}`)
  const totalProducts = await totalProductsStrategy(await responseJson.paging);
  responseJson.pageCount = Math.ceil(totalProducts / productsPerPage);

  await setSellersNickname(await responseJson.results)
  return await responseJson
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

export async function getFirstProducts() {
  const categories = await getCategories();
  const categoriesSize = await categories.length;
  const numberSelected = getRandomArbitrary(0, await categoriesSize);
  const category = await categories[await numberSelected];
  const query = await category.name;
  const responseJson = await getProductsBySearch(await query)
  responseJson.search=await query;
  return await responseJson
}
async function getCategories() {
  const responseJSon = await sendAPIQgetJSON(`${baseUrl}sites/MCO/categories`)
  return await responseJSon
}

export async function getProductsByPagination(page, search) {
  const responseJson = await sendAPIQgetJSON(`${baseUrl}sites/MCO/search?q=${search}&offset=${page * productsPerPage}&limit=${productsPerPage}`)
  await setSellersNickname(await responseJson.results)
  return await responseJson
}
