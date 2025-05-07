import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detils = () => {

    const data =useLoaderData()
    const {id}=useParams()

    useEffect(()=>{
        const findJob=data.find(company=>company.id==id)
        console.log(findJob);
    },[data,id])
    
    // console.log(data);
    // console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default Detils;