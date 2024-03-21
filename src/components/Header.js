import React, { useState } from "react";

const Title = () => {
    return (
        <a href="http://localhost:1234/">
            <img className="logo" alt="logo" src="https://i.ibb.co/XpxJ2np/Ap-Swiggy.jpg"></img>
        </a>
    );
};

const loggedInUser = ()=>{
    return false;
};

export const Header = () =>{
    const [isLogedIn, setisLogedIn] = useState([false]);

    
    return(
        <div className="header"> 
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLogedIn ? <button onClick={()=>setisLogedIn(false)}>Login</button> :
            <button onClick={()=>setisLogedIn(true)}>Logout</button>}
        </div >
    );
};
export default Header;