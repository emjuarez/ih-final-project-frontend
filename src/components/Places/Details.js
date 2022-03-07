import { useState, useContext, useEffect } from "react";
import PlacesContext from './../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'

export default function Details(){
    
    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces
    } = ctxPlaces

    const ctxUser = useContext(UsersContext) 

    const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser


    return(<h1>detalles</h1>)
    
}
