import React from 'react'
import { useParams } from "react-router";
import { getProductDetails } from '../services/productServices'
import Rating from '@material-ui/lab/Rating';

function ProductDetails() {

  const [productDetails, setproductDetails] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    getProductD()
  }, [])


  const getProductD = async () => {
    const productD = await getProductDetails(id);
    const pictures=await productD.pictures;
    const picture0=await pictures[0];
    productD.picture=await picture0.url;
    const reviews=await productD.reviews;
    const rra=await reviews.rating_average;
    productD.rra=await rra;
    setproductDetails(productD)
  }

  return (


    <div  class="container-md">

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-6 mx-auto">
      <img src={productDetails.picture} width="100%" height="100%"/>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h2 class="card-title">{productDetails.title}</h2>
        <Rating value={productDetails.rra} name="size-large"  size="large" />
        <h3 class="card-text"><small class="text-muted"> {productDetails.sellerNickname}</small></h3>
        <h1 class="card-text">{Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(productDetails.price)}</h1>
          
      </div>
    </div>
  </div>
</div>
    
      
  
     
      
      <div class="col-md-11 mx-auto">
      
        <h1>Descripción</h1>
      <p class="lh-sm">{productDetails.description}</p>
      </div>
      </div>
      
   

  );
}







export default ProductDetails;
