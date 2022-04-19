import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


export function SignOut() {
  
  let navigate = useNavigate()

  async function handleOnClick () {
   const jwt =  await localStorage.removeItem("jwt");
   window.location.reload();
   ///fix
  }

  return <div className="sign-out-container"> <button id="sign-out-button" onClick={handleOnClick}>LOG OUT</button> </div>
    
}
