import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} =useParams();
    const [productInfo, setProductInfo]=useState([])
    // useEffect(() =>{
    //     fetch('http://localhost:4000/product/'+id)
    // },[id])
    useEffect(() =>{
        fetch('http://localhost:4000/allProducts')
        .then(res=> res.json())
        .then(data=>setProductInfo(data))
    },[id])
    const singleProduct  = productInfo.find(pd=>pd._id === id);
    return (
        <div className="container">
           {singleProduct.name}
        </div>
    );
};

export default CheckOut;