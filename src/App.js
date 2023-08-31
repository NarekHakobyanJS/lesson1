import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchFilms } from './store/slices/filmsSlice';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import GenresPage from './pages/GenresPage/GenresPage';

function App() {

  const dispatch = useDispatch()
  const {pageNumber} = useSelector(state => state.filmsData)

  useEffect(()=>{
    window.scrollTo(0,0)
      dispatch(fetchFilms(pageNumber))
  },[pageNumber])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/:id' element={<FilmsPage/>} />
        <Route path='/genres/:genre' element={< GenresPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
