
export default function manageLogIn(

    state = {
        requesting: false,
        loggedIn: false
      },
      action
    ) {
        switch (action.type) {
            case "START_LOG_IN_REQUEST":
                return {
                    ...state,
                    requesting: true,
                };

            case "LOG_IN":
                return {
                    ...state, 
                    requesting: false, 
                    loggedIn: true
                }; 
                
        default:
            return state;
    }
}

