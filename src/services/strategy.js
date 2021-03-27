export async function totalProductsStrategy(paginInfo) {
    const paginTotal = await paginInfo.total;
    const paginPR = await paginInfo.primary_results;
  
    const totalP = await noAccesTokenTotalProductsStrategy(await paginTotal, await paginPR)
    return await totalP
  }
  
async function noAccesTokenTotalProductsStrategy(paginTotal, paginPR) {
    if (await paginTotal > await paginPR) {
      return await paginPR
    }
    return await paginTotal;
  }