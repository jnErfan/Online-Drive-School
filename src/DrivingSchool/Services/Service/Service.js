import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Service.css";
import Rating from 'react-rating';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = props => {
    const {id,className, details, img, rating, rateParson, price} =props.service;
    const history = useHistory();

    const getDetails = () => {
        history.push(`/service/${id}`)
        }

    return (
        <div>
            <Col className="shadow border-0 rounded-3">
            <Card className="cards single-product">
                <Card.Img height="300px" variant="top" src={img} />
                <Card.Body>
                <Card.Title>{className}</Card.Title>
                <Card.Text>
                <small className="detail">{details}</small>
                </Card.Text>
               
                <p>
                    <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                    />
                    <span className="rating">{rating}</span>
                </p>

             <p> <span className="fw-bold">{rateParson}</span> Person Rated </p>

                <h4 className="mb-3">{price}$</h4>
                <div className="d-flex justify-content-evenly">
                <Button onClick={()=>props.addToCart(props.service)} variant="dark">Add To Cart</Button>
                <Button onClick={getDetails} variant="outline-dark">Details</Button>
                </div>
                </Card.Body>
            </Card>
            </Col>
    
        </div>
    );
};

export default Service;