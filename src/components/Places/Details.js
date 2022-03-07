import { useState, useContext, useEffect } from "react";
import PlacesContext from './../../context/Places/PlacesContext'

export default function Details(){
    
    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces
    } = ctxPlaces

    const ctxUser = useContext(UsersContext) 

    return()
    
}
