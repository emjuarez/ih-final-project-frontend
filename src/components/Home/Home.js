
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

		
		<p>Verificar autenticación</p>
		<button onClick={() => { verifyingToken() }}>VERIFICAR</button>
		

		<h1>Tu usuario:</h1>
		<p>{currentUser.name}</p>
		<p>{currentUser.lastname}</p>
		<p>{currentUser.email}</p>


	</>
  )
}