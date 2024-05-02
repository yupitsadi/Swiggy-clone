import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./profile";
import ProfileClass from "./ProfileClass";
const About = ()=>{
    return(
        <>
            <h1>About US</h1>
            <p>
                This is About us page_type
            </p>
            <Outlet/>
            <ProfileClass name = {"Aditya"}/>
            <Profile name = {"Aditya"} />
        </>
    )
}
export default About;