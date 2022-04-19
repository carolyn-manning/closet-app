import { useNavigate } from "react-router-dom";



export default function manageItems(
   
    state = {
        requesting: false
      },
      action
    ) {
        switch (action.type) {
            case "START_LOG_IN_REQUEST":
                console.log(state) 
                return {
                    ...state,
                    requesting: true,
                };

            case "LOGIN":
                console.log(state)
                navigate("/my_closet")
                return {
                    requesting: false
                }; 
                
        default:
            return state;
    }
}

