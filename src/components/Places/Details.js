import { useState, useContext, useEffect } from "react";
import PlacesContext from './../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'
import { useParams, Link } from 'react-router-dom'

export default function Details(props){
    
    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlace
    } = ctxPlaces

    const { placeId } = useParams()
    console.log("placeId", placeId)

    const ctxUser = useContext(UsersContext) 

    const {
		
		authStatus

	} = ctxUser

    const foundPlace = places.find((onePlace) => {

        return onePlace._id === placeId
    })

    // useEffect(() =>{ getPlace()}, [])

    console.log("places", places)

    

    return(
        <div>
            <h1>Details</h1>

            {!foundPlace && <h3>Place not found!</h3>} 

            {foundPlace && (
                <>
                <h2>{foundPlace.name}</h2>
                <h3>{foundPlace.description}</h3>
                <p>{foundPlace.cathegory}</p>
                <p>{foundPlace.location}</p>
                </>
            )}

            <Link to="/places">Back</Link>
           
        </div>
    )
    
}
