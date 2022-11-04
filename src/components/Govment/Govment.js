import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrdersGovt from './OrdersGovt';

const Govment = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders]=useState([])
     useEffect(()=>{
     const data=axios.get("http://localhost:5000/orders")
     .then(result=>setOrders(result.data.data))
     },[user])
let totalTax=0;
     for(const order of orders){
           totalTax=totalTax+order.tax;
     }
    return (
        <div>
            <h1 style={{textAlign:"center"}} > Admin dashboard</h1>
           <div style={{display:"flex",justifyContent:"space-around",alignItems:"start",width:"100%"}}>
<div style={{width:"40%",padding:"50px"}}>
 <h2 style={{textAlign:"center"}}>  Tax you have in your account is:</h2>
 <p style={{color:"orange",textAlign:"center",fontSize:"30px",fontWeight:"bold"}}> {totalTax} tk</p>
</div>
<div style={{width:"60%",marginTop:"30px"}}>
    {
        orders?.map(order=><OrdersGovt
        key={order._id}
        order={order}

        >

        </OrdersGovt>)
    }
</div>

           </div>
           
        </div>
    );
};

export default Govment;