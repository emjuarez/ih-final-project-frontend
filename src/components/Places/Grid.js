import {  useContext, useEffect } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'
import {  Link, useNavigate } from 'react-router-dom'

export default function Grid(){

    const navigate = useNavigate()

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        getPlaces,
    } = ctxPlaces

    const ctxUser = useContext(UsersContext)

	const {
		
		authStatus
		
	} = ctxUser

    useEffect(() =>{ getPlaces()}, [])


    const changecathegory = ({target: {value}}) =>{
		
		getPlaces(value)
	}

    return (
        <>
        <div>
            <div  className="relative max-w-9xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-10 lg:px-0">
                <h1 style={{ marginBottom: 10}} className="text-4xl font-extrabold tracking-tight text-black lg:text-6xl">Places</h1>

                {authStatus &&
            
                <select onChange={changecathegory} className="inline-flex justify-center w-55px rounded-md border border-gray-300 shadow-sm py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true">
                    <option value="">
                        All
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
        {authStatus &&
        
        <button style={{ marginTop: 10}} onClick={()=> {  navigate("/create")}}  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
        
        }
            </div>
       

       

        </div>
           
        <div  style={{marginTop: 20, marginBottom: 90}} className=  "w-full">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

            {places.map((place) => { 
                return (
                    <>
                                        
                        <li className="relative">

                            <div key={place._id} className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                            <img src={place.photos} alt="" className="object-cover pointer-events-none group-hover:opacity-75"/>
                            <Link  to={`/place/${place._id}`} type="button" className="absolute inset-0 focus:outline-none">
                                
                            </Link>
                            </div>
                            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{place.name}</p>
                            
                        </li>

                        </>
                 )
                    })}
        </ul>
                    
        </div>

        </>
    )
}