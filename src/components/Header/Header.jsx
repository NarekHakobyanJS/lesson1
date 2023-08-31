import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import GenresBTN from './GenresBTN/GenresBTN';
import { fetchGenres } from '../../store/slices/genresSlice';
import Search from './Search/Search';
import { changeText, fetchSearch } from '../../store/slices/searchSlice';


const Header = () => {
    const [open, setOpen] = useState(false)
    const disaptch = useDispatch();
    const { genres } = useSelector((state) => state.genresData);
    const { text } = useSelector((state) => state.searchData);
    
    useEffect(() => {
        if(text.length > 3) {
            disaptch(fetchSearch(text))
            setOpen(true)
        }else {
            setOpen(false)
        }
    }, [text])
    useEffect(() => {
        disaptch(fetchGenres())
    }, [])


    return (
        <header>
            <div>
                <h4>filmsLogo</h4>
            </div>
            <nav>
                {
                    genres.map((genre) => {
                        return <GenresBTN key={genre.id} genre={genre} />
                    })
                }
            </nav>
            <div className='search-block'>
                <input 
                value={text} 
                onChange={(e) => disaptch(changeText(e.target.value))} />
                <div>
                    {
                        open && <Search setOpen={setOpen}/>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header