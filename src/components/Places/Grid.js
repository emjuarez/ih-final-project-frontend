import { useState, useContext, useEffect } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'
import {  Link } from 'react-router-dom'

export default function Grid(){

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

    console.log("places", places)

    const changecathegory = ({target: {value}}) =>{
		console.log(value)
		getPlaces(value)
	}

    return (
        <>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-black lg:text-6xl">Places</h1>

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
           
        <div  style={{marginTop: 50, marginBottom: 90}} className=  "w-full">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

            {places.map((place) => { 
                return (
                    <>
                    {/* <div key={place._id}>
                        <h3>
                        <Link to={`/places/place/${place._id}`}>
                            {place.name}
                        </Link>
                        </h3>
                    </div> */}


                    
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

     

       
        {/* <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <li className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" className="object-cover pointer-events-none group-hover:opacity-75"/>
            <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for IMG_4985.HEIC</span>
            </button>
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4985.HEIC</p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
        </li>

       
        </ul> */}



       

     
        </>
    )
}