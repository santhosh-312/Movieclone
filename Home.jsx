import { useEffect, useState } from 'react';
import Movie from './Movie';
import './Movie.css'
// import pic from './IMAGES/cat.gif'


function Home() {

  let [movies, setmovies] = useState(null);
  let [pending, setpending] = useState(true);
  let [error, seterror] = useState(null)


  useEffect(() => {

    setTimeout(() => {
      fetch("http://localhost:7000/movies")
        .then((res) => {                                                   //setpending(false);seterror(false)
          if (res.ok === false) {
            throw Error("ENTER THE CORRECT API-END-POINT PATH ")
          }
          return (res.json())
        })
        .then((data) => { setmovies(data); setpending(false); seterror(false) })
        .catch((err) => { seterror(err.message); setpending(false) })
    }, 1000)

  }, [])


  return (
    <div>
      {error && <h1 className='error'> {error} </h1>}
      {pending && <div className='loading'></div>}
      {movies && <Movie movies={movies} heading="ALL MOVIES" />}


      {/* {movies && <Movie movies={movies.filter((data)=>{return data.genre.includes("ADVENTURE")  })} heading="ADVENTURE" />}
    {movies && <Movie movies={movies.filter((data)=>{return(data.language.includes("TAMIL"))})} heading="TAMIL MOVIES" />}
   {movies && <Movie movies={movies.filter((data)=>{return(data.language.includes("ENGLISH"))})} heading="ENGLISH MOVIES" /> } */}
    </div>

  )

}

export default Home

