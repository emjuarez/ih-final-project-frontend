// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Create from './components/Places/Create'
import Grid from './components/Places/Grid'

import UsersState from './context/Users/UsersState';
import PlacesState from './context/Places/PlacesState'


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Auth from './routes/Auth'
import Public from './routes/Public';





function Router() {
  return (
    <>
        <PlacesState>
        <UsersState>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                    <Route 
                      index 
                      element={
                        <Public component={Home}
                      />} 
                    />

                    {/* localhost:3000/registro */}
                    <Route 
                      path="register"
                      element={
                        <Auth component={Register} />
                      } 
                    />

                    {/* localhost:3000/login */}
                    <Route 
                      path="login"
                      element={
                        <Auth component={Login} />
                      } 
                    />   

                    <Route
                      path="create"
                      element={
                        <Public component={Create}/>
                      }
                    />      

                    <Route
                      path="places"
                      element={
                        <Public component = {Grid}/>
                      }

                    />       

                    




                </Route>

              </Routes>
          </BrowserRouter>

          </UsersState>
          </PlacesState>
     
    </>
  );
}

export default Router;