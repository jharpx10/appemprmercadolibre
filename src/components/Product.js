import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { formatter } from '../services/infraestructureServices'

class Product extends React.Component {

  
    render() {
        
        

        const { name,imageUrl,sellerNickame,price,id} = this.props
      

        return (

           
            
            
            <Card style={{ width: "90%" }} >
                <NavLink
            
            
            to={`/products/details/${id}`}><Card.Img className={"mx-auto"} src={imageUrl} style={{ width: "100%", height: "300px" }}>

                </Card.Img>
                </NavLink>
                <Card.Body>
                    <strong><Card.Title>
                        {name}
                    </Card.Title></strong>

                    <Card.Text className={"buy-price"}>
                     Vendido por {sellerNickame}<br/> 
                        <h4 class="mt-2">{formatter.format(price)} </h4>
                    </Card.Text>

                </Card.Body>

            </Card>
          )


    }



    
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    sellerNickame: PropTypes.string.isRequired,
    imageUrl:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired

  }

    export default Product;