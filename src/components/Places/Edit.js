import {useState, useContext} from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Edit(){

    const navigate = useNavigate()

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlace,
        editPlace,
        deletePlace
    
    } = ctxPlaces

    const { placeId } = useParams()

    const foundPlace = places.find((onePlace) => {

        return onePlace._id === placeId

    }) || {}

    const [place, setPlace] = useState(foundPlace)

     console.log(editPlace)
     

    // console.log(foundPlace)

    const handleChange = (event) => {

        setPlace({
            ...place,
            [event.target.name]: event.target.value
        })
        console.log(place)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // createPlace(place)

        editPlace(place)
        
    }

    

    return(
        <>
          <form onSubmit={ (e) => { handleSubmit(e) } }>
                <label>Name</label>
                <input
                    name="name"
                    type="text"
                    value={place.name}
                    onChange={(e) => { handleChange(e) }}
                />
                <label>Descripion</label>
                <input
                     name="description"
                    type="textarea"
                    value={place.description}
                    onChange={(e) => { handleChange(e) }}
                />
                <label>Category</label>
                <input
                    name="cathegory"
                    type="text"
                    value={place.cathegory}
                    onChange={(e) => { handleChange(e) }}
                />
                <label>Photos</label>
                <input
                    name="photos"
                    type="text"
                    value={place.photos}
                    onChange={(e) => { handleChange(e) }}
                />
                <label>Location</label>
                <input
                    name="location"
                    type="text"
                    value={place.location}
                    onChange={(e) => { handleChange(e) }}
                />

                <button>Create Place</button>
            </form> 

            <button onClick={()=> {
                
                deletePlace(foundPlace._id)

                navigate("/places")
                
                }}>Delete this place</button>
            </>
    )
}