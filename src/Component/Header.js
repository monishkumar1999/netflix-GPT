
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { NetflixLogo } from '../url/url';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate=useNavigate();
  const handleSignout=()=>{
   
    const auth = getAuth();
signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  // An error happened.
});

  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between'>
      <img className='w-40' src={NetflixLogo}/>

      <div className="">
        <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' className='w-4'/>
        <button className='bg-black rounded text-white font-bold' onClick={handleSignout}>Sign out</button>
      </div>
    </div>
  )
}

export default Header;
