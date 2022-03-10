import {useState, useContext} from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Edit(){

    const navigate = useNavigate()

    const ctxPlaces = useContext(PlacesContext)

    const {
        places,
        editPlace,
        deletePlace
    
    } = ctxPlaces

    const { placeId } = useParams()

    const foundPlace = places.find((onePlace) => {

        return onePlace._id === placeId

    }) || {}

    const [place, setPlace] = useState(foundPlace)

    const handleChange = (event) => {

        setPlace({
            ...place,
            [event.target.name]: event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()


        editPlace(place)
        
    }

    

    return(
        <>
                            
            <form style={{marginTop: 50, marginBottom: 90}} onSubmit={ (e) => { handleSubmit(e) } } className="space-y-8 divide-y divide-gray-200 max-w-3xl mx-auto">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit : {place.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">  Create a new place so other peoople can know it!</p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                    <label for="username" className="block text-sm font-medium text-gray-700"> Name </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" name="name" id="name"  value={place.name}  onChange={(e) => { handleChange(e) }} autocomplete="name" className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"/>
                    </div>
                    
                    <div className="sm:col-span-3">
                    <label for="cathegory" class="block text-sm font-medium text-gray-700"> Category </label>
                    
                    </div>
                    <div className="mt-1">
                        <select id="cathegory" name="cathegory" onChange={handleChange}  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option value="culture">culture</option>
                        <option value="outdoors">outdoors</option>
                        <option value="night_life">night life</option>
                        <option value="food">food</option>
                        <option value="other">other</option>
                        </select>
                    </div>
                    </div>

                    <div className="sm:col-span-6">
                    <label for="about" className="block text-sm font-medium text-gray-700"> Description </label>
                    <div className="mt-1">
                        <textarea id="description" name="description" value={place.description} onChange={(e) => { handleChange(e) }} rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Write about this place so other users know what to expect.</p>
                    </div>

                    <div className="sm:col-span-3">
                    <label for="photos" className="block text-sm font-medium text-gray-700"> Image url</label>
                    <div className="mt-1">
                        <input type="text" name="photos" id="photos" value={place.photos} onChange={(e) => { handleChange(e) }} autocomplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    </div>


                    <div className="sm:col-span-3">
                    <label for="location" className="block text-sm font-medium text-gray-700">Place location url</label>
                    
                    <div className="mt-1">
                        <input type="text" name="location" id="location" value={place.location} onChange={(e) => { handleChange(e) }} autocomplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    </div>

                    </div>

                </div>

                <div className="flex justify-center">

                <button onClick={()=> {deletePlace(foundPlace._id) ; navigate("/places")}}  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button>

                <button onClick={()=> { editPlace(place) ; navigate("/places")}} type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>

                </div>

               
            </div>
            </form>


            </>
    )
}