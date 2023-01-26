import './Nav.css';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
function Nav()
{

  let [search , setSearch] = useState("")

  return( <section>

        <nav className="nav">

        <Link to="/"> HOME</Link>

        <div className="NavRight">
         <form className='input'> <input type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Wanna Search" />
          <Link to={`/searchmovie${search}`}><button className='search-btn'>SEARCH</button></Link></form>
          <Link to="/addmovie"> Add New Movies</Link>
          <Link to="/Favourites"> Favourites</Link>
        </div>

        </nav>

  </section> )

}

export default Nav

