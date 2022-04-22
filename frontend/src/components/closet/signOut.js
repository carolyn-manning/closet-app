import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


export function SignOut() {
  
  let navigate = useNavigate()

  function handleOnClick () {
   const jwt =  localStorage.removeItem("jwt");
   //window.location.reload();
   ///fix
   navigate('/happy')
  }

  return <div className="sign-out-container"> <button id="sign-out-button" onClick={handleOnClick}>LOG OUT</button> </div>
    
}
