import { FormControl, Row, Spinner } from 'react-bootstrap';
import UseServices from '../../Hooks/UseServices';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import { useState, useEffect } from "react";
import { createContext } from 'react';
import { addToStorage, getStorage } from '../../../Local-Storage/LoacalStorage';
export const serviceContext = createContext();


const Services = () => {
    const [services,searchDisplay,setSearchDisplay] = UseServices();
     const [cartUpdate, setCartUpdate] = useState([]);



     useEffect(() => {
        if (services.length) {
            const savedStorage = getStorage();
            const savedOrder  = [];
            for(const courseID in savedStorage){
               const course = services.find(cartItem => cartItem.id === courseID);
               savedOrder.push(course)
            }
            setCartUpdate(savedOrder);
        }

    } ,[services])



    const addToCart = service => {
        const exist = cartUpdate.find(cartItem => cartItem.id === service.id);
        if (exist) {
            alert("It Has Been Already Added")
        }else{
        const courseCounts = [...cartUpdate,service];
            setCartUpdate(courseCounts);
            addToStorage(service.id);
        }
        }

        const searchCoures = event =>{
            const searchText = event.target.value ;
            const matchedCourse = services.filter(service => service.className.toLowerCase().includes(searchText.toLowerCase()));
            setSearchDisplay(matchedCourse);
        }



    return (
<div className="container mt-5">
    <div className="mb-4  d-flex justify-content-center">
    <FormControl onChange={searchCoures} className="w-75 " placeholder="Search Course" />
    </div>
{
    services.length === 0 ? 
    <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
    </div>
    :
    <div className="row row-cols-1 row-cols-md-3 row-lg-3 g-4 d-flex justify-content-center">

            <div className="col col-9 col-md-9 col-lg-9">
            <Row xs={1} md={2} lg={2} className="g-4">
            {
                    searchDisplay.map(service => <Service
                    key={service.id}
                    service={service}
                    addToCart={addToCart}
                    />)
            }
            </Row>
            </div>
            <div className="col col-12 col-md-3 col-lg-3">
            <serviceContext.Provider value={[cartUpdate, setCartUpdate]}>
             <Cart/>
            </serviceContext.Provider>
            </div>
            </div> 
}
            
 
</div>
    );
};

export default Services;