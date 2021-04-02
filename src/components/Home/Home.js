import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="background">
            <Header></Header>
            <div className="product-container m-auto row">
            {
                products.map(product=><div className="col-lg-3 col-md-6 col-sm-12"><Products
                    product={product}
                    ></Products></div>)
            }
           
            </div>
        </div>
    );
};

export default Home;