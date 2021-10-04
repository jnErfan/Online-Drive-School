import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory} from 'react-router';
import UseServiceDetail from '../../Hooks/UseServiceDetail';


const ServiceDetails = () => {
    // Received Dynamic Routing Id With Use Params 
    const history = useHistory();
   
    const [courseDetail, id] = UseServiceDetail();
    console.log(courseDetail);
    // Back Button 
    const backButton = () => {
        history.push('/services')
    }
    return (
        <div className="container">
            <h1 className="mt-4 mb-3">ID: {id}</h1>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" />
                    <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                      Course Description
                    </Card.Text>
                    <h3 className="text-danger">
                    JSON File Didn't Load The data, Just Giving An Uncaught Error,  I think my all  processes were fine, But JSON File Couldn't find the file from This folder
                    </h3>
                    <h2 className="text-danger">
                    This is optional but I have spent a lot of time behind it,<br /> But I can't fix it 😢😢
                    </h2>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Button variant="outline-dark mt-4" onClick={backButton}>Back</Button>
        </div>
    );
};

export default ServiceDetails;