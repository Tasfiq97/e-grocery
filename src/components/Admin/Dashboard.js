import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders]=useState([])
     useEffect(()=>{
     const data=axios.get("http://localhost:5000/orders")
     .then(result=>setOrders(result.data.data))
     },[user])
let totalAmount=0;
     for(const order of orders){
           totalAmount=totalAmount+order.total;
     }
    return (
        <div>
            <h1 style={{textAlign:"center"}} > Admin dashboard</h1>
           <div style={{display:"flex",justifyContent:"space-around",alignItems:"start",width:"100%"}}>
<div style={{width:"40%",padding:"50px"}}>
 <h2 style={{textAlign:"center"}}>  Amount you have in your account is:</h2>
 <p style={{color:"orange",textAlign:"center",fontSize:"30px",fontWeight:"bold"}}> {totalAmount} tk</p>
</div>
<div style={{width:"60%",marginTop:"30px"}}>
    {
        orders?.map(order=><OrderDetails
        key={order._id}
        order={order}

        >

        </OrderDetails>)
    }
</div>

           </div>
           
        </div>
    );
};

export default Dashboard;