import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/userSlice";
import { auth } from "../Utils/firebase";

function Header() {
  const navigate = useNavigate();
  let selector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const UnSubsribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      },
      []
    );
    return ()=>{
      UnSubsribe()
    }
  }, []);

  let signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="z-10 bg-gradient-to-b from-black absolute w-full flex justify-between items-center">
      <div>
        <img
          className=" h-24"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <div className="flex px-10">
        {selector && (
          <>
            <img
              alt="userIcon"
              src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
              className="h-10 px-2"
            />
            <button onClick={signout}>sign out</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
