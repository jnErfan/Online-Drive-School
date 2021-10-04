import React from 'react';

const About = () => {
    // About Us Component 
    return (
        <div className="container">
            <h1 className="fw-bold mt-5">
            ABOUT US
            </h1>
            <h4 className="mt-3 mb-5">
            Know More About Our DrivePro
            </h4>

            <img className="rounded-pill mt-5 mb-5 w-75" src="https://images.unsplash.com/photo-1521410843026-323be9ead002?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />

            <div className="row row-cols-2 mt-5">
            <div  className="col col-12 col-md-6 col-lg-6">
                <h1>
                WHO WE ARE
                </h1>
                <p>
                        DrivePro is the best driving school.We have well trained instructors.We offer affordable fee to our learners. DrivePro is the best driving school.
                </p>
            </div>
            <div className="col col-12 col-md-6 col-lg-6">
                <h1>
                ABOUT OUR INSTRUCTOR
                </h1>
                <p>
                
                            DrivePro is the best driving school.We have well trained instructors.We offer affordable fee to our learners. DrivePro is the best driving school.
                </p>
            </div>
            </div>
        </div>
    );
};

export default About;