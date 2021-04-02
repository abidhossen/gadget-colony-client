import React, { useState } from 'react';
import Axios from 'axios'
import axios from 'axios';

const AddProduct = () => {
    const url = 'http://localhost:4000/addProduct'
    const [imageURL, setImageURL]= useState({});
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(url,{
            name: product.name,
            description: product.description,
            price: product.price,
            image: imageURL
        })
    }
    const handleChange=(e)=> {
        const newProduct ={...product};
        newProduct[e.target.id]=e.target.value;
        setProduct(newProduct);
    }
    const handleImageUpload = event=>{
        const imageData = new FormData();
        imageData.set('key', 'd5ce187d45e648900930bde115d4a288' );
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then((response)=>{
            setImageURL(response.data.data.display_url);
        })
        .catch((err)=>{
            console.log(err);
        });
       
    }
   
    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <p>
                    <span>Product Name: </span>
                    <input type="text" id="name" value={product.name} placeholder="Product Name" onChange={(e)=>handleChange(e)}/>
                </p>
                <p>
                    <span>Description: </span> 
                    <input type="text" id="description" value={product.description} placeholder="Description" onChange={(e)=>handleChange(e)} />
                </p>
                <p>
                    <span>Price: </span>
                    <input type="text" value={product.price} id="price" placeholder="Price" onChange={(e)=>handleChange(e)} />
                </p>
                <p>
                    <span>Product Image</span><input type="file" id="image" onChange={handleImageUpload} />
                </p>
              <button className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;