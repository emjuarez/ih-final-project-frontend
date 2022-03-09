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

    const getPlaces     = async (cathegory) => {

        const res = await axiosClient.get("/api/places" + (cathegory ? "/" + cathegory : ""))

        const arrPlaces = res.data.data

        dispatch({
            type: "GET_PLACES",
            payload: arrPlaces
        })
    }

    const getPlace    = async (id) => {

        

        const res = await axiosClient.get("/api/places/place" + (id ? "/" + id: ""))

        const singlePlace = res.data.data

        

        dispatch({
            type: "GET_PLACE",
            payload: singlePlace
        })

        console.log(singlePlace)
    }

    const deletePlace = async (id) => {

        const res = await axiosClient.post(`/api/places/delete/${id}`)

        getPlaces()
    }

    const editPlace = async (place) => {

        const res = await axiosClient.post(`/api/places/place/edit/${place._id}`, place)
        dispatch({
            type: "EDIT_PLACE",
            payload: place
        })

    }

    // const getFood       = async () => {

    //     const res = await axiosClient.get("/api/places/food")

    //     const arrPlaces = res.data.data

    //     dispatch({
    //         type: "GET_FOOD",
    //         payload: arrPlaces
    //     })
    // }

    // const getNight      = async () => {

    //     const res = await axiosClient.get("/api/places/nightlife")

    //     const arrPlaces = res.data.data

    //     dispatch({
    //         type: "GET_NIGHT",
    //         payload: arrPlaces
    //     })
    // }

    // const getOut        = async () => {

    //     const res = await axiosClient.get("/api/places/outdoors")

    //     const arrPlaces = res.data.data

    //     dispatch({
    //         type: "GET_OUT",
    //         payload: arrPlaces
    //     })
    // }

    // const getOther      = async () => {

    //     const res = await axiosClient.get("/api/places/other")

    //     const arrPlaces = res.data.data

    //     dispatch({
    //         type: "GET_OTHER",
    //         payload: arrPlaces
    //     })
    // }

    return(
        <PlacesContext.Provider
            value={{
                places: globalState.places,
                createPlace,
                getPlaces,
                getPlace,
                deletePlace,
                editPlace,
                // getCulture,
                // getFood,
                // getNight,
                // getOut,
                // getOther
            }}>
            {props.children}
        </PlacesContext.Provider>
    )

}

export default PlacesState