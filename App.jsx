import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favourates from "./Favourates";
import Addmovie from "./Addmovie";
import Moviedetails from "./Moviedetails";
import Update from "./Update";
import Moviesearch from "./Moviesearch";

function App() {
  return(
    <BrowserRouter>
      <div>

        <Nav/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/addmovie">
            <Addmovie />
          </Route>

          <Route path="/Favourites">
            <Favourates />
          </Route>

          <Route path="/moviedetails:id">
            <Moviedetails/>
          </Route>

          <Route path="/update:id">
            <Update/>
          </Route>

          <Route path="/searchmovie:searchdata">
            <Moviesearch/>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
