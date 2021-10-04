import { useEffect, useState } from "react";

const UseServices = () => {

    const [services ,setServices] = useState([])
    const [searchDisplay, setSearchDisplay] = useState([]);

    useEffect(()=>{
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => {
            setSearchDisplay(data)
            setServices(data)})
    },[])



    return [services,searchDisplay,setSearchDisplay];
};

export default UseServices;