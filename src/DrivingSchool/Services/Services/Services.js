import { Row } from 'react-bootstrap';
import UseServices from '../../Hooks/UseServices';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import { useState } from "react";


const Services = () => {
    const [services] = UseServices();

     const [cartUpdate, setCartUpdate] = useState([]);

     

    const addToCart = service => {
        const exist = cartUpdate.find(cartItem => cartItem.id === service.id);
        if (exist) {
            alert("It Has Been Already Added")
        }else{
        const hiredCounts = [...cartUpdate,service];
            setCartUpdate(hiredCounts);
        }
        }


    return (
<div className="container mt-5">

            <div className="row row-cols-1 row-cols-md-3 row-lg-3 g-4 d-flex justify-content-center">

            <div className="col col-9 col-md-9 col-lg-9">
            <Row xs={1} md={2} lg={2} className="g-4">
            {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    addToCart={addToCart}
                    />)
            }
            </Row>
            </div>

            <div className="col col-12 col-md-3 col-lg-3">
             <Cart 
             cartUpdate={cartUpdate}
             />
            </div>

            </div>
 
</div>
    );
};

export default Services;