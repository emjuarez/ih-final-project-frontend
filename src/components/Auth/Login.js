// ./src/components/Auth/Login.js
import {useContext, useState} from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Login() {

  const ctxUser = useContext(UsersContext)

  const {
    loginUser
  } = ctxUser


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    
    event.preventDefault()

    loginUser(data)

  }


  return (
	  <>
      {/* <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <label>Email</label>
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
        />

        <label>Password</label>
        <input 
        name="password"
        value={data.password}
        onChange={(evt) => { handleChange(evt) }}
        type="password"
        />

        <button type="submit">Iniciar sesión</button>

      </form> */}


  
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
           
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

              <form onSubmit={(evt) => { handleSubmit(evt) }} className="space-y-6" action="#" method="POST">
                <div>
                  <label for="email" className="block text-sm font-medium text-gray-700"> Email  </label>
                  <div className="mt-1">
                    <input id="email" value={data.email} onChange={(evt) => { handleChange(evt) }} name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>

                <div>
                  <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                  <div className="mt-1">
                    <input id="password" value={data.password} onChange={(evt) => { handleChange(evt) }} name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>
              
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </div>
              </form>

            </div>
          </div>
        </div>


    </>
  )
}