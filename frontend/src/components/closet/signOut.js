import { useNavigate } from "react-router-dom";


export function SignOut() {
  
  let navigate = useNavigate()

  function handleOnClick () {
   localStorage.removeItem("jwt");
   navigate('/')
  }

  return <div className="sign-out-container"> <button id="sign-out-button" onClick={handleOnClick}>LOG OUT</button> </div>
    
}
