import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = ({ setShow, url }) => {
  const [data, setData] = useState({
    "name": "",
    "email": "",
    "message": ""
  })
  const onchangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }
  
  const onSubmited = async (event) => {
    event.preventDefault();

    const response = await axios.post(`${url}/user/add`, data)

    if (response.data.success) {
      setData({
        'name': "",
        'email': "",
        'message': ""
      })
      toast.success(response.data.message);
    }else{
      toast.error(response.data.message);
      console.log(error)
    }
  }

  return (
    <div className='contact'>
      <form action="submit" onSubmit={onSubmited} className='form-fild'>
        <div className="heading">
          <h2>Contact Form</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' id="exampleFormControlInput1" placeholder="What we are call you..?" required onChange={onchangeHandle} value={data.name} autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="exampleFormControlInput2" placeholder="name@example.com" required onChange={onchangeHandle} value={data.email} autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" name='message' rows="3" required onChange={onchangeHandle} placeholder='Leave a Message..' value={data.message} autoComplete='off'></textarea>
        </div>
        <div className="btn">
          <button type='submit' className="btn btn-primary">Contact Form</button>
        </div>
      </form>
    </div>
  )
}

export default Login
