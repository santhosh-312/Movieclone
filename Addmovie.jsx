import { useState } from "react"
import { useHistory } from "react-router-dom"

function Addmovie()
{
    let h = useHistory()

    let [ movieName , setMoviename] = useState("")
    let [ hero , setHero] = useState("")
    let [ gener , setGener] = useState("")
    let [ rating , setRating] = useState("")
    let [ poster , setPoster] = useState("")

let data = (event)=>{

       event.preventDefault();

       let newData = { movieName , hero ,gener ,rating ,poster }
    
    fetch("http://localhost:7000/movies" , 
    {
        method:'POST',
        headers:{"Content-Type" : "application/json" },
        body:JSON.stringify(newData)
    })
    .then(()=>{
        alert("HAY CHIEF!, DATA SUCCESSFULLY ADDED")
        h.push("/")
    })
}

    return(
        <section className="form-container">

        <form className="form" onSubmit={data} >
        <input type="text" placeholder="MOVIENAME" value={movieName} onChange={(event)=>{setMoviename(event.target.value)}} required />
        <input type="text" placeholder="HERO" value={hero} onChange={(e)=>{setHero(e.target.value)}} required />
        <input type="text" placeholder="GENER" value={gener} onChange={(e)=>{setGener(e.target.value)}} required />
        <input type="number" placeholder="RATING" value={rating} onChange={((e)=>{setRating(e.target.value)})} min='1' max='10' required />
        <input type="url" placeholder="POSTER-URL" value={poster} onChange={(e)=>{setPoster(e.target.value)}} required />
        <input type="SUBMIT" value='ADD' />
        </form>

        </section>
    )

}

export default Addmovie