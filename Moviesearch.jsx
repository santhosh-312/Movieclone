import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Movie from "./Movie";
// import Moviedetails from "./Moviedetails";

function Moviesearch()
{

    let {searchdata} = useParams()

    let [ movies , setmovies] = useState( null );
    let [ pending , setpending ] = useState ( true );
    let [ error , seterror ] = useState ( null )

    useEffect(()=>{ 

        setTimeout( ()=>{
          fetch("http://localhost:7000/movies")
          .then((res)=>{
            if(res.ok === false)
            {
              throw Error("ENTER THE CORRECT API-END-POINT PATH ")
            }
            return res.json()})
          .then((data)=>{console.log(data); ;setmovies(data);setpending(false);})
          .catch((err)=>{seterror(err.message);setpending(false)})
        },1000)
  
      } , [])
  
    return(
        <div>
            
      { error && <h1 className='error'> {error} </h1>}
      {pending && <div className='loading'></div>}
      {movies  && <Movie movies={movies.filter((data)=>{ return(data.movieName.toUpperCase().includes(searchdata.toUpperCase()))})}  heading="search result" /> }
                      
        </div>
    )
}
export default Moviesearch