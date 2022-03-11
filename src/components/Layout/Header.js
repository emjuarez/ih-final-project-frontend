// . /src/components/Layout/Header.js

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'



export default function Header() {


	const ctxUser = useContext(UsersContext)

	const {
		currentUser,
		authStatus,
		logoutUser
	} = ctxUser

		

  return (
	<>
			
		<header className="bg-black">
		<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
			<div className="w-full py-6 flex items-center justify-between border-b  lg:border-none">
			<div className="flex items-center">
				<a href="/">
				<span className="sr-only">Workflow</span>
				<img className="h-12 w-auto" src="/images/logospot.png" alt=""/>
				</a>
			</div>
				{
					authStatus ?
					(
						<>
							<div className="ml-10 space-x-4">
								<a href="/" onClick={() => {logoutUser()}} className="inline-block bg-green-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Logout</a>
								<a href="" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-black-600 hover:bg-indigo-50">{currentUser.name}</a>
							</div>
						</>
					):
					(
						<>
							<div className="ml-10 space-x-4">
								<a href="/login" className="inline-block bg-green-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Login</a>
								<a href="/register" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-black-600 hover:bg-indigo-50">Register</a>
							</div>
						</>
					)
				}
			
			</div>
			
		</nav>
		</header>

	</>
	
  )
}


