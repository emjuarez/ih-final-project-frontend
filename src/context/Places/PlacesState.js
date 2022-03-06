import { useReducer } from "react";

import PlacesContext from "./PlacesContext";
import PlacesReducer from './PlacesReducer'

import axiosClient from "../../config/axios";

const PlacesState = (props) => {

    const initialState = {
        
        places: [],
        msgError: ""
    }

    const [globalState, dispatch] = useReducer(PlacesReducer, initialState)

    const createPlace   = async (dataform) => {

        const res = await axiosClient.post("/api/places/create", dataform)

        getPlaces()
    }

    const getPlaces     = async () => {

        const res = await axiosClient.get("/api/places")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_PLACES",
            payload: arrPlaces
        })
    }

    const getCulture    = async () => {

        const res = await axiosClient.get("/api/places/culture")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_CULTURE",
            payload: arrPlaces
        })
    }

    const getFood       = async () => {

        const res = await axiosClient.get("/api/places/food")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_FOOD",
            payload: arrPlaces
        })
    }

    const getNight      = async () => {

        const res = await axiosClient.get("/api/places/nightlife")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_NIGHT",
            payload: arrPlaces
        })
    }

    const getOut        = async () => {

        const res = await axiosClient.get("/api/places/outdoors")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_OUT",
            payload: arrPlaces
        })
    }

    const getOther      = async () => {

        const res = await axiosClient.get("/api/places/other")

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_OTHER",
            payload: arrPlaces
        })
    }

    return(
        <PlacesContext.Provider
            value={{
                places: globalState.places,
                createPlace,
                getPlaces,
                getCulture,
                getFood,
                getNight,
                getOut,
                getOther
            }}>
            {props.children}
        </PlacesContext.Provider>
    )

}

export default PlacesState