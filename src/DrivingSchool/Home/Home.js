import React from 'react';
import "./Home.css"

const Home = () => {
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

            <section>
        {/*     <Row xs={1} md={2} className="g-4">
             <Col>
                    <Card>
                        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
             </Col>
            </Row> */}
            </section>
        
       </div>
    );
};

export default Home;