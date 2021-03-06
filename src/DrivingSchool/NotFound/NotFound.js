import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory()

    const backToHome = () => {
        history.push("/home")
    }

    return (
        <div>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
            <h1 style={{color: '#3D52A6', fontWeight: '700', fontSize:'50px'}}>Page Not Found</h1>

            <button onClick={backToHome} className="btn btn-primary mt-5">Back To Home</button>
        </div>
    );
};

export default NotFound;