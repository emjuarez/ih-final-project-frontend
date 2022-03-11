
import { useState, useContext } from 'react'


import UsersContext from './../../context/Users/UsersContext'


export default function Home() {

	const ctxUsers = useContext(UsersContext)

	const {
		currentUser,
		verifyingToken
	} = ctxUsers
 
  return (
	<>
	 
	<div className="bg-white">
	
		<div className="relative bg-gray-900">
			<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
			<img src="images/Photo07_3.jpg" alt="" className="w-full h-full object-center object-cover"/>
			</div>
			<div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50"></div>

			<div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
			<h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Spotview</h1>
			<p className="mt-4 text-xl text-white">Share and discover unique places around you. You can be a tourist always!</p>
			<a href="/places" className="mt-8 inline-block bg-green-700 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-yellow-500">Explore</a>
			</div>
		</div>

	</div>

	</>
  )
}