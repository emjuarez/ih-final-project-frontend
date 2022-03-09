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
        <>
        <div>
            

            {!foundPlace && <h3>Place not found!</h3>} 

            {foundPlace && (
                <>
                {/* <h2>{foundPlace.name}</h2>
                <h3>{foundPlace.description}</h3>
                <p>{foundPlace.cathegory}</p>
                <p>{foundPlace.location}</p> */}

                <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
    <div class="lg:max-w-lg lg:self-end">

      <nav aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
          <li>
            <div class="flex items-center text-sm">
              <Link to="/places" class="font-medium text-gray-500 hover:text-gray-900">Back</Link>
              {/* <a href="#" class="font-medium text-gray-500 hover:text-gray-900"> Back </a> */}
            </div>
          </li>

         
        </ol>
      </nav>

      <div class="mt-4">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{foundPlace.name} details</h1>
      </div>

      <div class="mt-6 text-center">
          <div class="mt-6 text-center">
            <a href="" class="group inline-flex text-base font-medium">
              
              
              <span class="text-gray-500 hover:text-gray-700">{foundPlace.cathegory}</span>
            </a>
          </div>
      </div>

      <section aria-labelledby="information-heading" class="mt-4">
        <h2 id="information-heading" class="sr-only">Place information</h2>

        <div class="mt-4 space-y-6">
          <p class="text-base text-gray-500">{foundPlace.description}</p>
        </div>

        
      </section>
    </div>

    
    <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg" alt="Model wearing light green backpack with black canvas straps and front zipper pouch." class="w-full h-full object-center object-cover"/>
      </div>
    </div>

    
    <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
      <section aria-labelledby="options-heading">
        <h2 id="options-heading" class="sr-only">Product options</h2>

        <form>
          {/* <div class="sm:flex sm:justify-between">
           
            <fieldset>
              <legend class="block text-sm font-medium text-gray-700">Size</legend>
              <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
               
                <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                  <input type="radio" name="size-choice" value="18L" class="sr-only" aria-labelledby="size-choice-0-label" aria-describedby="size-choice-0-description"/>
                  <p id="size-choice-0-label" class="text-base font-medium text-gray-900">18L</p>
                  <p id="size-choice-0-description" class="mt-1 text-sm text-gray-500">Perfect for a reasonable amount of snacks.</p>
                  
                  <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>

                
                <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                  <input type="radio" name="size-choice" value="20L" class="sr-only" aria-labelledby="size-choice-1-label" aria-describedby="size-choice-1-description"/>
                  <p id="size-choice-1-label" class="text-base font-medium text-gray-900">20L</p>
                  <p id="size-choice-1-description" class="mt-1 text-sm text-gray-500">Enough room for a serious amount of snacks.</p>
                  
                  <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>
              </div>
            </fieldset>
          </div> */}
         
          <div class="mt-10">
            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Edit</button>
          </div>
         
        </form>
      </section>
    </div>
    
  </div>
  {authStatus &&
            
            <Link to={`/place/${foundPlace._id}/edit`}>Edit</Link>
        
        }

</div>


{/* <center>
  <iframe src={foundPlace.location} width="800" height="600" ></iframe>
</center> */}

                </>
            )}

            
            
        
        </div>

      


        </>
    )
    
}


