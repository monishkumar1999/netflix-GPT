
import React from 'react'

import { NetflixLogo } from '../url/url';
export const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-40' src={NetflixLogo}/>

      
    </div>
  )
}

export default Header;
