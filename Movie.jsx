
import { Link } from 'react-router-dom'
import './Movie.css'

function Movie({ movies, heading }) {

    return (
        <div className='body'>
            <h1>{heading}</h1>
            <div className='container'>

                {
                    movies.map((movie) => {
                        return (
                            <Link to={`/moviedetails${movie.id}`} className="link">
                                <div className='movieList'>
                                    <img src={movie.poster} alt="/" />
                                    <h2> MOVIE-NAME : {movie.movieName}</h2>
                                    {/* <h2> HERO : {movie.hero}</h2>
                        <h2> GENER : {movie.gener}</h2> */}
                                </div> </Link>
                        )
                    })
                }
            </div>

        </div>
    )

}


export default Movie