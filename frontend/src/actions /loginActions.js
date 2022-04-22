import {useNavigate} from "react-router-dom";

export default function LogInAction (userCredentials) {

  const configObj = {
    method: "POST", 
    headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
    },
    body: JSON.stringify({
        user:{
        email: userCredentials.email,
        password: userCredentials.password,
        }
    }) 
  }

  //let navigate = useNavigate()
        
  return (dispatch) => {
    dispatch({ type: "START_LOG_IN_REQUEST" });
    fetch(`http://localhost:4000/login/`, configObj)
    .then(response => response.json())
    .then(userCredentials => {
      if(userCredentials.jwt) {
        localStorage.setItem("jwt", userCredentials.jwt);
        dispatch({ type: "LOG_IN", userCredentials });
      }
    })
    .then( () =>  {console.log("hi") //naviagte})
  }
}


//hook is erroring 


   
