import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Question/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Question/DisplayQuestion'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/Auth' element={<Auth/>}/>
<Route exact path='/Questions' element={<Questions/>}/>
<Route exact path='/AskQuestion' element={<AskQuestion/>}/>
<Route exact path='/Questions/:id' element={<DisplayQuestion/>}/>



      </Routes>
    </div>
  )
}

export default AllRoutes