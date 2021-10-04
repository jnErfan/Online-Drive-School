import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';


const ServiceDetails = () => {
    const {id} = useParams();
    const history = useHistory()

    const backButton = () => {
        history.push('/services')
    }
   

    return (
        <div>
            <h1>ID: {id}</h1>
            <Button variant="outline-dark" onClick={backButton}>Back</Button>
        </div>
    );
};

export default ServiceDetails;