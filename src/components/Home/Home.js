
import { useState, useContext } from 'react'


import UsersContext from './../../context/Users/UsersContext'


export default function Home() {

	

	
	const ctxUsers = useContext(UsersContext)

	const {
		currentUser,
		verifyingToken
	} = ctxUsers
 

	console.log(ctxUsers)




  return (
	<>
	
{/* 		
		<p>Verificar autenticación</p>
		<button onClick={() => { verifyingToken() }}>VERIFICAR</button>

		<h1>Tu usuario:</h1>
		<p>{currentUser.name}</p>
		<p>{currentUser.lastname}</p>
		<p>{currentUser.email}</p> */}


 
	<div className="bg-white">
	
		<div className="relative bg-gray-900">
			<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
			<img src="/images/fondo.jpg" alt="" className="w-full h-full object-center object-cover"/>
			</div>
			<div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50"></div>

			<div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
			<h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Spotview</h1>
			<p className="mt-4 text-xl text-white">Share and discover unique places around you. Feel like a tourist on your own city!</p>
			<a href="/places" className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">Explore</a>
			</div>
		</div>

	</div>

	




	</>
  )
}