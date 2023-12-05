import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { options } from './constant';
import { addNowPlayingMovies } from './moviesSlice';

function useNowPlayingMovies() {
    let disptach = useDispatch()
    useEffect( ()=>{
         let fun  = async ()=>{
            const url = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , options)
            .then(res =>res.json())
            .then(json =>json)
            .catch(err => console.error('error:' + err));
            let movies = url.results
            disptach(addNowPlayingMovies(movies))
        }
        fun()
    }, [])
}

export default useNowPlayingMovies;