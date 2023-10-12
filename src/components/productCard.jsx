import React, { PureComponent } from 'react';
import adanrice from '../assets/adanrice.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const starIcons = [];

  for (let i = 1; i <= product.rating; i++) {
    starIcons.push(<span key={i} className="star-filled">&#9733;</span>);
  }

  return (
    <div className=''>
      <Card className='card' style={{ width: '250px', height: 'max-content' }}>
        <Card.Img variant="top" src={adanrice} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>

          <Card.Text>
            {product.quantity}
            <br />
            {starIcons} ({product.rating})
            <br />
            $ {product.price}
          </Card.Text>
          <Button variant="" className='w-100 cartbtn'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></Button>
        </Card.Body>
      </Card>

    </div>
    // <div className="product-card bg-danger">
    //     <img src={adanrice} alt="" />
    //     <h4>{product.name}</h4>
    //     <p>{product.quantity}</p>
    //     <p>{product.price}&emsp;{product.rating}</p>

    // </div>
  );
};

export default ProductCard;
