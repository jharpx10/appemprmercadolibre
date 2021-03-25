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


    <div>
    
      
      <h1>{productDetails.title}</h1>
      <img src={productDetails.picture} class="img-fluid" alt="..."></img>
      <div>Precio: {productDetails.price}</div>
      <div>Vendedor: {productDetails.sellerNickname}</div>
      <Rating disabled name={'rating'} value={productDetails.rra} size={'small'} />
      <p class="lh-sm">{productDetails.description}</p>
      
      </div>
      
   

  );
}







export default ProductDetails;
