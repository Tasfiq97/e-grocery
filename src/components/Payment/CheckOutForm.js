
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import "./common.css"

const CheckOutForm = () => {
    const [error,setError]=useState(" ");
    const [clientSecret,setClientSecret]=useState(" ");
    
    const navigate = useNavigate();
    const info=JSON.parse(localStorage.getItem("Info"))
        const cart =JSON.parse(localStorage.getItem("totalCart"));
    const stripe=useStripe()
    const elements = useElements();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!stripe || !elements) {
        
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
           setError(error.message)
    
          } else {
            const data= axios.post("http://localhost:5000/orders",cart).then(data=>{
                    if (data.status===200){
                        swal({
                            title: "Good job!",
                            text: "payment is successful",
                            icon: "success",
                            button: "Ok",
                          })
                          navigate("/home")
                          localStorage.clear()
                    }
                    else{
                        alert("something wrong")
                    }
                }
                );
          }

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
       please Pay {cart.total} taka
      </button>
      {error && <p style={{color:"red"}}>{error.message}</p>
    }
    </form>
    
        </div>
    );
};

export default CheckOutForm;