import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo2 from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const [admin,setAdmin]=useState(false)
    const [govt,setGovt]=useState(false)

    const handleSignOut = () =>{
        signOut(auth);
    }
   useEffect(()=>{
         const fetchFunc=async()=>{
            const data= await axios.get(`http://localhost:5000/users/${user?.email}`)
            .then(result=>setAdmin(result.data.admin));
         }
         fetchFunc()
   },[user])
   useEffect(()=>{
    const fetchFunc=async()=>{
       const data= await axios.get(`http://localhost:5000/users/govt/${user?.email}`)
       .then(result=>setGovt(result.data.govt));
    }
    fetchFunc()
},[user])

    return (
        <nav className='header'>
            <h1>E-Grocery</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                {
                    admin && user && <Link to="/dashboard">Dashboard</Link>
                }
                 {
                    govt && user && <Link to="/govtRoute">Gov account</Link>
                }
                {
                    user ?
                 <span> <span style={{color:"black",fontSize:"20px",fontWeight:"bolder",border:"2px solid white",padding:"5px 5px",marginLeft:"15px",marginRight:"15px"}}>{user.email}</span><button
                style={{padding:"10px",fontSize:"15px",background: "orange",cursor:"pointer",border:"none"}} onClick={handleSignOut}>Sign out</button>  </span>
                    :
                    <Link to="/login">Login</Link>}
                
            </div>
        </nav>
    );
};

export default Header;