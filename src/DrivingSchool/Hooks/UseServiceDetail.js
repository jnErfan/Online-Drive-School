import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UseServiceDetail = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
      fetch('../../../public/fakeData.JSON')
      .then(res => res.json())
      .then(data => setDetails(data))
  },[])
    const courseDetail = details.find(detail => detail.id === id);
    return [courseDetail, id]
};

export default UseServiceDetail;