import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = (event) =>{
        event.preventDefault();
        const shipping = {name, email:user?.email, address, phone};
        localStorage.setItem("Info",JSON.stringify(shipping));
       const cart =JSON.parse(localStorage.getItem("totalCart"));
       navigate("/payment")
    // const data= axios.post("http://localhost:5000/orders",cart).then(data=>{
    // //     if (data.status===200){
    //         swal({
    //             title: "Good job!",
    //             text: "Order placed successfully",
    //             icon: "success",
    //             button: "Ok",
    //           })
    // //           navigate("/home")
    // //           localStorage.clear()
    // //     }
    //     else{
    //         alert("something wrong")
    //     }
    // }
    // );
    
       

        }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} type="email" name="email" id="" readOnly/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input  className='form-submit' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;