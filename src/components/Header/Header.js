import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo2 from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img className='image' src={logo2} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                {
                    user ?
                 <span> <span style={{color:"white",fontSize:"20px",fontWeight:"bolder",border:"2px solid white",padding:"5px 5px",marginLeft:"15px",marginRight:"15px"}}>{user.email}</span><button
                style={{padding:"10px",fontSize:"15px",background: "orange",cursor:"pointer"}} onClick={handleSignOut}>Sign out</button>  </span>
                    :
                    <Link to="/login">Login</Link>}
                
            </div>
        </nav>
    );
};

export default Header;