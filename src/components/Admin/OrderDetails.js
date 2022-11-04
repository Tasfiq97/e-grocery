import { faStarOfDavid, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const OrderDetails = ({order}) => {
    const {email,tax,total}=order
    return (
        <div>
            
      <div style={{padding:"20px",borderBottom:"2px solid grey",display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
        <div style={{padding:"30px",fontSize:"20px"}}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </div>
      <div>
      <h3>{email}</h3>
        <h5>tax: {tax}</h5>
        <h5>total: {total}</h5>
      </div>
      </div>
        </div>
    );
};

export default OrderDetails;