import { useContext, useEffect } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'
import { Link } from 'react-router-dom'

export default function Grid(){

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces,
        getPlace
    } = ctxPlaces

    const ctxUser = useContext(UsersContext)

	const {
		
		authStatus
		
	} = ctxUser

    useEffect(() =>{ getPlaces()}, [])

    console.log("places", places)

    const changecathegory = ({target: {value}}) =>{
		console.log(value)
		getPlaces(value)
	}

    return (
        <>

        {authStatus &&

        
            <select onChange={changecathegory}>
                <option value="">
                    Select a Category
                </option>
                <option value="food">
                    food
                </option>
                <option value="culture">
                    culture
                </option>
                <option value="night_life">
                    night life
                </option>
                <option value="outdoors">
                    outdoors
                </option>
                <option value="other">
                    other
                </option>
                
            </select>						
        
        }

        <div>
            {places.map((place) => { 
                return (
                    <div key={place._id}>
                        <h3>
                        <Link to={`/places/place/${place._id}`}>
                            {place.name}
                        </Link>
                        </h3>
                    </div>
                    
                    )
                    })}
                    
        </div>

       

     
        </>
    )
}