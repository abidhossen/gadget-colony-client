import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Products = (props) => {
    const {name,image,price,description,_id}=props.product
    const history = useHistory();
    const handleProduct=() =>{
        history.push('/checkout')
    }
    return (
        <div>
            <Card className="text-center">
            <div className="product-logo">
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {description}
                </Card.Text>
                
            </Card.Body>
            <div className="price-area">
                <h3>$ {price}</h3>
                <Link to={`/checkout/${_id}`}><button
                 onClick={handleProduct}
                 className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button></Link>
                </div>
            </Card>
        </div>
    );
};

export default Products;