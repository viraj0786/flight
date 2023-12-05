import React, { useRef, useState } from "react";
import Header from "./Header";
import { valiDate } from "../Utils/validate";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login(props) {
const dispatch = useDispatch ();
const navigate = useNavigate()
  const [isSigninForm, setisSigninForm] = useState(false);
const [fromError , setfromError]= useState()

const nameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()

const handleSubmit = () =>{
    let name = nameRef && nameRef?.current?.value
    let email  = emailRef.current.value
    let password = passwordRef.current.value
    let message = valiDate(email , password , name);
    setfromError(message)
    
    if(fromError) return

    if(!isSigninForm){

createUserWithEmailAndPassword(auth, email, password ,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  const { uid , email , displayName} = auth.currentUser
  dispatch(addUser({uid , email , displayName}))
}).catch((error) => {
  // An error occurred
  // ...
});
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setfromError(errorCode + "-" + errorMessage);
  });
    }
}
  return (
    <div className=" mx-auto text-white">
      <Header />
      <img
        alt="banner"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <form 
      onSubmit={(e)=> e.preventDefault()}
      className="w-1/3 bg-opacity-80 absolute top-1/4 left-1/3 bg-black flex flex-col p-10">
        <h1 className="font-medium text-3xl py-4 text-white">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm 
            && (<><input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="bg-stone-700 rounded-sm p-2 my-4 w-full"
          />
          </>
          )}
        <input
            ref={emailRef}
          type="text"
          placeholder="Email or Number"
          className="bg-stone-700 rounded-sm p-2 my-4 w-full"
        />
        <input
            ref={passwordRef}
          type="password"
          placeholder="Password"
          className=" bg-stone-700 p-2 rounded-sm my-4 w-full"
        />
          <label className="text-red-600">{fromError}</label>

        <button className="bg-red-600 text-white w-full my-6 p-2 rounded-sm"
        onClick={handleSubmit}>
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Login;
