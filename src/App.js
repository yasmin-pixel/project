import axios from "axios";
import "./App.css";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import ListMovies from "./components/ListMovies";

import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const removeAll = () => {
    setFavourites([]);
  };

  // const edit = (event) => {
  //   const name = parseInt(event.target.name);
  //   const editMovie = favourites.map(() => movies.name);
  //   setFavourites([...favourites, editMovie]);
  // };

  const addToFavourites = (event) => {
    const id = parseInt(event.target.id);
    const foundMovie = movies.find((movie) => movie.id === id);
    setFavourites([...favourites, foundMovie]);
  };
  const removeMovie = (event) => {
    const id = parseInt(event.target.id);
    const newFavouriteList = favourites.filter(
      (favourites) => favourites.id !== id
    );
    // console.log(id);
    setFavourites([...newFavouriteList]);
  };

  // const ifTure = favourites.filter((event) => event.includes("true"));
  // console.log(ifTure);

  const getMovies = async () => {
    const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");
    // console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Movies</h1>

            {movies.map((movie) => {
              return (
                <ListMovies
                  movies={movies}
                  key={movie.id + 1}
                  id={movie.id}
                  name={movie.name}
                  releasedOn={movie.releasedOn}
                  watched={movie.watched}
                  handleAddToFav={addToFavourites}
                />
              );
            })}
          </Route>
          <Route path="/favourite">
            <h2>favourites</h2>

            {favourites.length > 0 &&
              favourites.map((movie) => {
                return (
                  <ListMovies
                    movies={movies}
                    key={movie.id + 1}
                    id={movie.id}
                    name={movie.name}
                    releasedOn={movie.releasedOn}
                    watched={movie.watched}
                    isFavourite={true}
                    handleFavouritesClick={removeMovie}
                  />
                );
              })}

            <button onClick={removeAll}> Remove all</button>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
