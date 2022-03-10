import { useState, useContext, useEffect } from "react";
import PlacesContext from './../../context/Places/PlacesContext'
import UsersContext from '../../context/Users/UsersContext'
import { useParams, Link } from 'react-router-dom'

export default function Details(props){
    
    const ctxPlaces = useContext(PlacesContext)

    const {
      
        places
        
    } = ctxPlaces

    const { placeId } = useParams()
 
    const ctxUser = useContext(UsersContext) 

    const {
		
		authStatus

	} = ctxUser

    const foundPlace = places.find((onePlace) => {

        return onePlace._id === placeId
    })
      
    return(
        <>
        <div >
            

            {!foundPlace && <h3>Place not found!</h3>} 

            {foundPlace && (
                <>
        
            <div class="bg-white">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:max-w-lg lg:self-end">

                  <nav aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-2">
                      <li>
                        <div class="flex items-center text-sm">
                          <Link to="/places" className="font-medium text-gray-500 hover:text-gray-900">Back</Link>

                        </div>
                      </li>

                    
                    </ol>
                  </nav>

                  <div className="mt-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{foundPlace.name} details</h1>
                  </div>

                  <div className="mt-6 text-center">
                      <div className="mt-6 text-center">
                        <p href="" className="group inline-flex text-base font-medium">
                          
                          
                          <span className="text-gray-500 hover:text-gray-700"> Category: {foundPlace.cathegory}</span>
                        </p>
                      </div>
                  </div>

                  <section aria-labelledby="information-heading" className="mt-4">
                    <h2 id="information-heading" class="sr-only">Place information</h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-base text-gray-500">{foundPlace.description}</p>
                    </div>
                    
                    <div style={{marginTop: 40}} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
                    <iframe src={foundPlace.location} width="570" height="450"  allowfullscreen="" loading="lazy"></iframe>
                    </div>

                  </section>
                </div>

                
                <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img src={foundPlace.photos} alt="Place photo" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>

                
                <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                  <section aria-labelledby="options-heading">
                    <h2 id="options-heading" className="sr-only">Product options</h2>

                    <form>
                    
                      {authStatus &&
                      <div style={{marginLeft: 60}} className="mt-10">
                        <Link to={`/place/${foundPlace._id}/edit`} class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Edit</Link>
                      </div>
                      }
                    
                    </form>
                  </section>
                </div>
              </div>
            </div>
        </>
        )}      
        </div>
      </>
    )
    
}


