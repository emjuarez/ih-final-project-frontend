import { useContext } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'

export default function Grid(){

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces
    } = ctxPlaces
}