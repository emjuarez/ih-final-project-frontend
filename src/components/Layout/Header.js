// . /src/components/Layout/Header.js

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../../context/Places/PlacesContext'
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
		<header>
			<figure>
				LOGO
			</figure>
				
			<nav>
				<ul>



				

					{
						
						authStatus ?
						
						(
							<>
								<li>
									<Link
										to="/"
										onClick={() => {logoutUser()}}
									>
										Cerrar sesión		
									</Link>
								</li>
								<li>{currentUser.name}</li>
							</>
							
						) :
						(
							<>
								<li>
									<Link
										to="/registro"
									>
									Crear cuenta
									</Link>
								</li>
								<li>
									<Link
										to="/login"
									>
									Iniciar sesión
									</Link>
								</li>
							</>
						)

					}

					
					

				</ul>

			</nav>
		</header>
		{/* <header className="bg-indigo-600">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    
	{
		authStatus ?
		(
			<>
			<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      
				<div className="ml-10 space-x-4">
					<Link to="/"
						onClick={() => {logoutUser()}}  className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Cerrar Sesión</Link>
					<a  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">{currentUser.name}</a>
				</div>
			</div>
			</>
		):
		(
			<>
			<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      
				<div className="ml-10 space-x-4">
					<Link to="/registro"
						 className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Crear cuenta</Link>
					<Link to="/login" href="#" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Iniciar sesión</Link>
				</div>
			</div>
			</>
		)
	}
  </nav>
</header> */}
	</>
	

  )
}




