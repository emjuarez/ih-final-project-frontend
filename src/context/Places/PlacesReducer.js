const reducer = (globalState, action) => {

    switch(action.type){
        case"GET_PLACES":
            return{
                ...globalState,
                places: action.payload
            }

            default:
                return globalState
    }
}

export default reducer