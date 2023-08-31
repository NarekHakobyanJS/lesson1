import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Search.css';

const imgUrl = "https://image.tmdb.org/t/p/w500/"

const Search = ({setOpen}) => {
  const {search} = useSelector((state) => state.searchData)
  return (
    <div className='search'>
      <div>
        {
          search.map((s) => {
            return <NavLink to={`/${s.id}`} onClick={() => setOpen(false)}>
              <div className='search-film'>
                <img src={imgUrl + s.poster_path}/>
                <p>{s.title}</p>
              </div>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default Search