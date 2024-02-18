import React from 'react'
import {Routes,Route} from 'react-router-dom'
import MainPage from './Components/MainPage'
import Room from './Components/Room'

const App = () => {
  return (
   <Routes>
    <Route  path='/' Component={MainPage}/>
    <Route  path='/room/:roomID' Component={Room}/>

   </Routes>
  )
}

export default App