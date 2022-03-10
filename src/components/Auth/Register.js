// ./src/components/Auth/Register.js

import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {

  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    lastname: "",
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

    registerUser(data)

  }

  return (
    <>
      
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
           
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

              <form onSubmit={(evt) => { handleSubmit(evt) }} className="space-y-6" action="#" method="POST">
                <div>
                  <label for="name" className="block text-sm font-medium text-gray-700"> Name  </label>
                  <div className="mt-1">
                    <input id="name" value={data.name} onChange={(evt) => { handleChange(evt) }} name="name" type="name" autocomplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>

                <div>
                  <label for="lastname" className="block text-sm font-medium text-gray-700"> Lastname  </label>
                  <div className="mt-1">
                    <input id="lastname" value={data.lastname} onChange={(evt) => { handleChange(evt) }} name="lastname" type="lastname" autocomplete="lastname" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>

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
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
                </div>
              </form>

            </div>
          </div>
        </div>

    </>
  )
}