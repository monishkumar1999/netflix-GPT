
import React from 'react'
import { IMG_CDN } from './Utils/Constant'

const MovieCard=({posterPath})=> {
  // console.log(posterPath)
  return (
    <div className='w-32'>
    <img src={IMG_CDN+posterPath} alt="no image"/>
    </div>
  )
}

export default MovieCard
