import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51JwMUVBUqhp5H3cVY7c0On2XnvbbFJ3KnarxH3hXpRwkOhdtxB8bRo7QzW4NIKZgagimdz84wocPE8ZCkduIxyd100GsRSjlWI');

const Payment = () => {

   
        const info=JSON.parse(localStorage.getItem("Info"))
        
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Please pay for the products</h1>
            <h3 style={{textAlign:"center"}}>{info.email}</h3>

            <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
        </div>
    );
};

export default Payment;