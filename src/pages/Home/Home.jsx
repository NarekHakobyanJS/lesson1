import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import FilmsCard from "../../components/FilmsCard/FilmsCard";
import { changePage } from "../../store/slices/filmsSlice";

const Home = () => {
  const { films,isPanding } = useSelector((state) => state.filmsData);
  const dispatch = useDispatch();
  console.log(films);
  return (
    <>
      <div className="home">
        {" "}
        {films.map((film) => {
          return <FilmsCard key={film.id} film={film} />;
        })}
      </div>
      <button
      disabled={isPanding}
       onClick={() => dispatch(changePage())} 
       className="morebtn">
        {isPanding ? "loading..." : "more" }
      </button>
    </>
  );
};

export default Home;
