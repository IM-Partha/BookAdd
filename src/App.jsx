import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePage from './compo/pages/CreatePage'
import { Route, Routes } from 'react-router-dom'
import Table from './compo/pages/Table'
import Updatepage from './compo/pages/Updatepage'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/CreatePage' element={<CreatePage/>}/>
      <Route path='/Table' element={<Table/>}/>
      <Route path='/Updatepage/:id' element={<Updatepage/>}/>
    </Routes>
 
    </>
  )
}

export default App
