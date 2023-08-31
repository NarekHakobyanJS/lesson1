import React, { useEffect } from "react";
import "./FilmsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmId } from "../../store/slices/filmsSlice";
import { imgUrl } from "../../components/FilmsCard/FilmsCard";
import { NavLink } from "react-router-dom";

const FilmsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { film } = useSelector((state) => state.filmsData);
 
  useEffect(() => {
    dispatch(fetchFilmId(id));
  }, [film]);
  return (
    <div className="page_par1 glow">
      <div className="nav1" >
        <NavLink className="link" to="/"> x </NavLink>
      </div>
      <div className="page_par2">
        <img width={300} src={imgUrl + film.poster_path} alt="" />
        <div className="page_par3" >
          <div className="name" >{film.title}</div>
          <div  className="rating" > rating : {film.vote_average}</div>
          <div className="overview" >{film.overview}</div>
          <div className="date" >
            release date : { film.release_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsPage;
