import Header from './Header'
import React from "react";
import {
    useParams
  } from "react-router-dom";

let Profile = () => {
    let {username} = useParams();
    console.log(username)
    return(
        <>
        <Header/>
        <div>
            Hello This is {username} Profile Component !
            

        </div>
        </>    )
    }
    
    export default Profile;