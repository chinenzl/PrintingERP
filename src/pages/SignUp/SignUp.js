import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import OAuth from '../../components/OAuth';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {db} from "../../firebase"
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import {toast} from "react-toastify"

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        password:"",
    })
    const {name, email, password } = formData;
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value,
        }))
    }

    async function onSubmit(e){
        e.preventDefault()
        try{
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            const formDataCopy={...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp();
    
            //send the formData to the firebase database
            await setDoc(doc(db,"users",user.uid),formDataCopy)
    
            //Go to the Home Page when users complete the sign up
            navigate("/jobList")
            
            //Use the React toast to show the successful notice
            toast.success("Sign Up is Successful")
    
          }catch(error){
            //Show the ERROR notice
            toast.error("Something went wrong with the Registration")
          }
    }
  return (
    <Form onSubmit={onSubmit}>
        <h1>SignUp</h1>
        <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" id="name" value={name} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" value={email} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" value={password}  onChange={onChange} placeholder="Password" />
      </Form.Group>
      <div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <OAuth/>
     
      </div>
        <div >
            <p >Have an account?
                <Link to="/login"> LogIn</Link>
            </p>

            <p>
                <Link to="/#" > Forgot Password?</Link>
            </p>
        </div>
    </Form>
  );
}

export default SignUp;