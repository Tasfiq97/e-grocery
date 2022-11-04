import React from 'react';
import "./Home.css"
import { BsFillCalendarFill,BsFillFilePostFill,BsCloudCheck,BsBox } from "react-icons/bs";
import FastShip from './FastShip';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='hero-container'>
                <h1>Stay Home and Get daily Needs</h1>
                <p>start your daily shopping</p>
             <Link to="/shop">
             <button style={{background:"orange",borderRadius:"10%"}} className='btn'>Order Now  </button>
             </Link>
                </div>
                <div className='img-container'>
                <img className='img' src="https://freepngimg.com/thumb/grocery/41640-8-groceries-images-free-hd-image.png" alt="" />
            </div>
            </div>
            <div className='service-container'>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <BsFillCalendarFill style={{fontSize:"40px",}}></BsFillCalendarFill>
                   <div style={{marginLeft:"20px"}}>
                   <h3>Free delivery</h3> 
                   <p style={{color:"grey",fontSize:"15px"}}>for all orders upto 50 taka</p>
                   </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <BsFillFilePostFill style={{fontSize:"40px",}}></BsFillFilePostFill>
                   <div style={{marginLeft:"20px"}}>
                   <h3>Refundable</h3> 
                   <p style={{color:"grey",fontSize:"15px"}}>If your item have no damage we agree to refund it.</p>
                   </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <BsCloudCheck style={{fontSize:"40px",}}></BsCloudCheck>
                   <div style={{marginLeft:"20px"}}>
                   <h3>Secure Payment</h3> 
                   <p style={{color:"grey",fontSize:"15px"}}>100% secure payment</p>
                   </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <BsBox style={{fontSize:"40px",}}></BsBox>
                   <div style={{marginLeft:"20px"}}>
                   <h3>24/7 Customer Support</h3> 
                   <p style={{color:"grey",fontSize:"15px"}}>We have dedicated support</p>
                   </div>
                </div>
            </div>
            <div className='categories'>
               <h1 style={{marginBottom:"50px"}}>Categories</h1>
               <div style={{display:"flex",justifyContent:"space-around"}}>
               <Link style={{textDecoration:"none",color:"black"}} to="/vegetables">
               <div>
                    <img style={{width:"80%"}} src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg" alt="" />
                    <h3>vegetables</h3>
                </div>
               </Link>
               <Link style={{textDecoration:"none",color:"black"}} to="/meat">
                <div>
                <img style={{width:"100%"}} src="https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg" alt="" />
                    <h3>meats</h3>
                </div>
                </Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/dairy">
                <div>
                <img style={{width:"90%"}} src="https://www.bruker.com/en/applications/food-analysis-and-agriculture/food-quality/milk-and-dairy/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1462.jpeg/1596451146895/milk-dairy.jpeg" alt="" />
                    <h3>dairy</h3>
                </div>
                </Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/beverage">
                <div>
                <img style={{width:"100%",height:"80%"}} src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/beverage-day.jpg" alt="" />
                    <h3>beverage</h3>
                </div>
                </Link>
                <div>
                <img style={{width:"70%",height:"70%"}} src="https://i.ytimg.com/vi/epsx_oLkj5Y/maxresdefault.jpg" alt="" />
                    <h3>bakery and pastry</h3>
                </div>
               </div>
            </div>
            <FastShip></FastShip>
            <Footer></Footer>
        </div>
    );
};

export default Home;