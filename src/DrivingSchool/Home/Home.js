import { Card, Col, Row } from "react-bootstrap";
import "./Home.css"
import { useEffect, useState } from "react";
import Rating from 'react-rating';

const Home = () => {
    
    const [ourServices ,setOurServices] = useState([])

    useEffect(()=>{
        fetch("homeFakeData.JSON")
        .then(res => res.json())
        .then(data => setOurServices(data))
    },[])



    return (
       <div>
          
            <section className="bg-container container-fluid">
            <div className="home-Main">
              <div className="container">
              <h1 className="home-Title">
                   Online <br />
                   Driving School
               </h1>

                <h1 className="get-service">
                Get Your Driving Services Here
                </h1>
            {/* <Button>Go Service</Button> */}
              </div>
            </div>
            </section>
            <section className="container mt-5">
            <Row xs={1} md={2} lg={4} className="g-4">
            {
               ourServices.map(ourService => <Col className="shadow border-0 rounded-3">
            <Card className="product home-product">
                <Card.Img  variant="top" src={ourService.img} />
                <Card.Body>
                <Card.Title>{ourService.className}</Card.Title>
               
                <p>
                    <Rating
                    initialRating={ourService.rating}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                    />
                    <span className="rating">{ourService.rating}</span>
                </p>

             <p> <span className="fw-bold">{ourService.rateParson}</span> Person Rated </p>

                <h4 className="mb-3">{ourService.price}$</h4>
                <div className="d-flex justify-content-evenly">
                </div>
                </Card.Body>
            </Card>
            </Col>
               )
           }
           </Row>
           </section>
           
        
       </div>
    );
};

export default Home;