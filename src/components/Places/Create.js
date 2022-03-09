import { useState, useContext, useEffect } from 'react'
import PlacesContext from '../../context/Places/PlacesContext'
import { useNavigate } from 'react-router-dom'

export default function Create(props){
    const navigate = useNavigate()

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

        console.log(place)

        createPlace(place)

        setPlace({
            name:"",
            description:"",
            photos:"",
            cathegory: "",
            location:""
        })

        navigate('/places')
        
    }
    return(
        <>
            {/* <form onSubmit={ (e) => { handleSubmit(e) } }>
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
            </form> */}

  
<form style={{marginTop: 80}} onSubmit={ (e) => { handleSubmit(e) } } className="space-y-8 divide-y divide-gray-200 max-w-3xl mx-auto">
  <div className="space-y-8 divide-y divide-gray-200">
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Create a new place</h3>
        <p className="mt-1 text-sm text-gray-500">  Create a new place so other peoople can know it!</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label for="username" className="block text-sm font-medium text-gray-700"> Name </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            
            <input type="text" name="name" id="name"  value={place.name}  onChange={(e) => { handleChange(e) }} autocomplete="name" className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"/>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label for="about" className="block text-sm font-medium text-gray-700"> Description </label>
          <div className="mt-1">
            <textarea id="description" name="description" value={place.description} onChange={(e) => { handleChange(e) }} rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
          </div>
          <p className="mt-2 text-sm text-gray-500">Write about this place so other users know what to expect.</p>
        </div>

        <div className="sm:col-span-6">
          <label for="cover-photo" className="block text-sm font-medium text-gray-700"> Add a photo </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="photos" className="block text-sm font-medium text-gray-700"> Image </label>
          <div className="mt-1">
            <input type="text" name="photos" id="photos" value={place.photos} onChange={(e) => { handleChange(e) }} autocomplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        {/* <div className="sm:col-span-3">
          <label for="cathegory" className="block text-sm font-medium text-gray-700"> Category </label>
          <div className="mt-1">
            <input type="text" name="cathegory" id="cathegory" value={place.cathegory} onChange={(e) => { handleChange(e) }} autocomplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div> */}

      
        
          <div className="sm:col-span-3">
          <label for="cathegory" class="block text-sm font-medium text-gray-700"> Category </label>
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

        </div>

       

        <div className="pt-8">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Place location.</h3>
        <p className="mt-1 text-sm text-gray-500">Add the url of google maps.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="location" className="block text-sm font-medium text-gray-700"> URL </label>
          <div className="mt-1">
            <input type="text" name="location" id="location" value={place.location} onChange={(e) => { handleChange(e) }} autocomplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>
        
      </div>
     </div>

    </div>

  

    
    <div className="flex justify-center">
      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">create</button>
    </div>
  </div>
</form>






        </>
    )
}