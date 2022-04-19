export function logIn (credentials) {
        return (dispatch) => {
          dispatch({ type: "START_ADDING_ITEMS_REQUEST" });
          fetch('http://localhost:4000/items', {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}})
            .then((response) => response.json())
            .then((items) => {
              console.log(items)
              dispatch({ type: "SIGN_IN", jwt })});
        };
    
}
   
