import React from 'react'
import './GenresBTN.css'
import { NavLink } from 'react-router-dom'

const GenresBTN = ({genre}) => {
  return (
    <NavLink 
    to={`/genres/${genre.id}`}
    className='genreBTN'>{genre.name}</NavLink>
  )
}

export default GenresBTN