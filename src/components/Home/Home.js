import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css'



const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-cliffs-66527.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="background">
            <Header></Header>

            <div className="product-container m-auto row">
                {
                    products.length === 0 && <div className="text-center w-100"><CircularProgress /></div>
                }
                {
                    products.map(product => <div className="col-lg-4 col-md-6 col-sm-12"><Products
                        product={product}
                    ></Products></div>)
                }
            </div>
        </div>
    );
};

export default Home;