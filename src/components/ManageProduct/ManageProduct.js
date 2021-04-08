import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageProduct.css'
import { CopyrightTwoTone } from '@material-ui/icons';
import axios from 'axios';


const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-cliffs-66527.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
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
                        <td className="operation"><button onClick={()=>handleDelete(pd._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button> </td>
                    </tr>)
                   }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;