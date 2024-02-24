import  loginPic from '../../images/loginPic.jpeg';
import './LogIn.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OAuth from '../../components/OAuth';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import {toast} from "react-toastify";

function LogIn() {

  const [formData, setFormData]=useState({
    email:"",
    password:"",
  })
  const {email, password } = formData;
  const navigate = useNavigate();

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }

  async  function onSubmit(e){
    e.preventDefault()
    try{
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
     if(userCredential.user){
      toast.success("Hello")
      navigate('/');
    }
    }catch(error){
      toast.error("Bad user Credentials")
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img src={loginPic} alt="pic" />
        <h1>LogIn</h1>
      </div>
      <div className="right">
        <div className='form-box'>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            id="email" 
            value={email} 
            onChange={onChange} />

          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter password" 
            value={password}
            onChange={onChange}
          />
          <Button className="custom-margin" variant="primary" type="submit" onClick={onSubmit}>Submit</Button>
          <OAuth/>
        </div>
      </div>
  </div>
  
  );
}

export default LogIn;