import { useEffect, useState } from "react";

const UseServices = () => {

    const [services ,setServices] = useState([])

    useEffect(()=>{
        fetch("fakeData.JSON")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])



    return [services];
};

export default UseServices;