import React from "react";
import "./FilmsCard.css"
import { NavLink } from "react-router-dom";

export const imgUrl = "https://image.tmdb.org/t/p/w500/"

const FilmsCard = ({film}) =>{ 
    return(
        <div className="filmCard" >
                <h4>{film.title}</h4>
                <NavLink to={`${film.id}`} >
                <img width={300} src={imgUrl + film.poster_path} alt="" />
                </NavLink>
        </div>
    )
}

export default FilmsCard;