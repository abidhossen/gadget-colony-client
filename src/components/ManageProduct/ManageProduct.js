import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageProduct.css'


const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-cliffs-66527.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h3>Manage Product</h3>
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       product.map(pd=> <tr>
                        <td>{pd.name}</td>
                        <td>${pd.price}</td>
                        <td className="operation"><FontAwesomeIcon icon={faTrash} /> </td>
                    </tr>)
                   }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;