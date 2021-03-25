import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Product extends React.Component {

  
    render() {

        const { name,imageUrl,sellerNickame,price,id} = this.props
        return (
            <Link to={`/products/details/${id}`}>
            <Card style={{ width: "18rem" }}>
                <Card.Img src={imageUrl} style={{ width: "300px", height: "300px" }}>

                </Card.Img>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>

                    <Card.Text>
                        Precio: {price} <br/> 
             Vendedor: {sellerNickame}
                    </Card.Text>

                </Card.Body>

            </Card>
            </Link>)


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