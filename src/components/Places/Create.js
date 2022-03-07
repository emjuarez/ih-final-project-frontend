import { useState, useContext, useEffect } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'

export default function Create(){

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces,
        createPlace
    } = ctxPlaces

    const [place, setPlace] = useState({
        name:"",
        description:"",
        photos:"",
        cathegory: "",
        location:""
    })

    const handleChange = (event) => {

        setPlace({
            ...place,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        createPlace(place)

        setPlace({
            name:"",
            description:"",
            photos:"",
            cathegory: "",
            location:""
        })
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
        </>
    )
}