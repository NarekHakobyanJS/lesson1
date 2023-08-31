import React from 'react';
import { useEffect } from 'react';
import './GenresPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresByMovie, changePageGnere } from '../../store/slices/genresSlice';
import { useParams } from 'react-router-dom';

const GenresPage = () => {
    const {genre} = useParams()

    const dispatch = useDispatch();
    const {genresFilm, pageNumber} = useSelector((state) => state.genresData)
    
    useEffect(() => {
        dispatch(fetchGenresByMovie({genre, pageNumber}))
    }, [genre, pageNumber])

    return (
        <div>
            {
                genresFilm.map((g) => {
                    return <h4 style={{color : 'white'}}>{g.title}</h4>
                })
            }
            <button
            onClick={() => dispatch(changePageGnere())}
            >+</button>
        </div>
    )
}

export default GenresPage