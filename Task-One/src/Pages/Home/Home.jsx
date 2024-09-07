import React, { useState } from 'react'
import '../Home/Home.css'
import Login from '../../Componets/Login/Login.jsx'

const Home = ({url}) => {
  const [show, setShow] = useState(false)
  return (
    <div className='home'>
      {show === true
        ? <Login setShow={setShow} url={url}/>
        : <>
          <div className="btn">
            <button type="button" className="btn btn-primary" onClick={()=>setShow(true)}>Contact Form</button>
          </div>
        </>
      }
    </div>
  )
}

export default Home
