import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-cliffs-66527.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    console.log(orders)
    return (
        <div>
            <Header></Header>
            
            <div className="table-container">
            <h3 className='text-center'>You have {orders.length} {orders.length>1?'orders':'order'}</h3>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order.name}</td>
                                <td>${order.price}</td>
                                <td>{(new Date(order.date).toDateString('dd/MM/yyyy'))}</td>
                                <td>{(new Date(order.time).toTimeString('en-US', { hour: 'numeric', hour12: true }))}</td>
                                <td>{order.email}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Orders;