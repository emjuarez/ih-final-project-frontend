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

    const createPlace = async () => {}

    const getPlaces = async () => {}

    const getCulture = async () => {}

    const getFood = async () => {}

    const getNight = async () => {}

    const getOut = async () => {}

    const getOther = async () => {}

}

