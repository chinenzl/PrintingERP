import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try{
      // check for the user 
      const auth = getAuth();
      const provider = new
      GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      const user = result.user
      
      
      const docRef =doc(db,"users",user.uid)
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/")
    }catch(error){
      toast.error("Could not authorize with Google")
    }
  }
  return (
         <Button onClick={onGoogleClick} variant="warning mx-2" >
         <FcGoogle className='mx-1'></FcGoogle>Continue With Google
         </Button>
  )
}