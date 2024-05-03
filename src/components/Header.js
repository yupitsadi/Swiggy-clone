import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Title = () => {
    return (
        <a href="http://localhost:1234/">
            <img className="logo" alt="logo" src="https://i.ibb.co/XpxJ2np/Ap-Swiggy.jpg"></img>
        </a>
    );
};

export const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="header"> 
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    {/* <Link to='/login'><li>Login</li></Link>  */}
                    <li>Cart</li>
                    <Link to='/instamart'><li>InstaMart</li></Link> 
                </ul>
            </div>
            {isLoggedIn?(<button onClick={()=> setIsLoggedIn(false)}
            > Logout</button>) : (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)
            }
        </div >
    );
};
export default Header;