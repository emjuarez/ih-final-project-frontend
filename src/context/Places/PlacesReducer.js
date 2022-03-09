const reducer = (globalState, action) => {

    switch(action.type){
        case"GET_PLACES":
        
            return{
                ...globalState,
                places: action.payload
            }

            case "EDIT_PLACE":
                return{
                    ...globalState,
                    place: action.payload
                }

            default:
                return globalState
    }
   
}

export default reducer