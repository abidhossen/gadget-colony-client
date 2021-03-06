import React from 'react';
import { useParams } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminRoute.css'

const AdminRoute = () => {
    const {navId} = useParams();
    return(
        <div className="productArrangement-container">
            {navId ==="addProduct" && <AddProduct></AddProduct>}
            {navId ==="manageProduct" && <ManageProduct></ManageProduct>}
            {navId ==="editProduct" && <EditProduct></EditProduct>}
        </div>
    );
    
};

export default AdminRoute;