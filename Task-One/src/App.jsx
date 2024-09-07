import React from 'react'
import '../src/app.css'
import Home from '../src/Pages/Home/Home.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom'

const App = () => {
  const url = 'http://localhost:5000';
  return (
    <div className='app'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home url={url}/>}/>
      </Routes>
    </div>
  )
}

export default App
