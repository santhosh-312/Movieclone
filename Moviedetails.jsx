import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom"
// import './Movie.css'

function Moviedetails()
{
    let {id} = useParams()
    let h = useHistory()

    let [ movie , setmovie] = useState( null );
    let [ pending , setpending ] = useState ( true );
    let [ error , seterror ] = useState ( null )


    useEffect(()=>{

      setTimeout( ()=>{
        fetch("http://localhost:7000/movies/" + id)
        .then((res)=>{
          if(res.ok === false)
          {
            throw Error("ENTER THE CORRECT API-END-POINT PATH ")
          }
          return res.json();})
        .then((data)=>{console.log(data);setmovie(data);setpending(false);seterror(false)})
        .catch((err)=>{seterror(err.message);setpending(false)})
      },1000)

    } )

    let deleteData = ()=>{

      fetch("http://localhost:7000/movies/" + id , {method:"DELETE"})
      .then(()=>{
        alert("HAY CHEIF..!,DATA SUCCESSFULLY DELETED")
        h.push("/")
      })

    }

        
return(
    <div className="body">   
      { error && <h1 className='error'> {error} </h1>}
      {pending && <div className='loading'></div>}
      {movie &&
       <div  className='movieDetails'>
      <img src={movie.poster} alt="/" />
                        <h2> MOVIE-NAME : {movie.movieName}</h2>
                        <h2> HERO : {movie.hero}</h2>
                        <h2> GENER : {movie.gener}</h2>

        <Link to={`/update${movie.id}`}><button className="update-btn"> UPDATE </button></Link>
        <button className="delete-btn" onClick={deleteData} >DELETE</button>

        </div>
        }
    </div>
)
    
}

export default Moviedetails