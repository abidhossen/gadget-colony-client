import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './CheckOut.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState([])
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        orderDate: new Date(),
        orderTime: new Date()
    });

    const handleDateChange = (date) => {
        const newDates={...selectedDate}
        newDates.orderDate = date;
        setSelectedDate(newDates);
    };
    const handleTimeChange = (date) => {
        const newDates={...selectedDate}
        newDates.orderTime = date;
        setSelectedDate(newDates);
    };
    const handleOrder=() =>{
       const newOrder= {...loggedInUser,...selectedDate,...productInfo}
       fetch('https://cors-anywhere.herokuapp.com/tranquil-cliffs-66527.herokuapp.com/addOrder',{
           method:'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newOrder)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
    }
    useEffect(() => {
        fetch('https://tranquil-cliffs-66527.herokuapp.com/product/'+id)
            .then(res => res.json())
            .then(data => setProductInfo(data))
    }, [])
    console.log(productInfo)
    return (
        <div>
            <div className="header-container">
                <Header></Header>
            </div>
            <div className="product-container text-center">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="product-image">
                                    <img src={productInfo.image} alt="" />
                                </div>
                                {productInfo.name}
                            </td>
                            <td>1</td>
                            <td>${productInfo.price}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="checkout-area">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Order Placing Date"
                                value={selectedDate.orderDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                           
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Order Placing Time"
                                value={selectedDate.orderDate}
                                onChange={handleTimeChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <div className="checkout-btn text-right">
                       <Link to="/orders">
                            <button onClick={handleOrder} className="btn btn-primary  ">Check Out</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;