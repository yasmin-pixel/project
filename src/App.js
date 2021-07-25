import axios from "axios";
import "./App.css";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import ListMovies from "./components/ListMovies";
import ImageSlider from "./components/ImageSlider";

import { useState, useEffect } from "react";
import { SliderData } from "./components/SliderData";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const removeAll = () => {
    setFavourites([]);
  };

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

    setFavourites([...newFavouriteList]);
  };

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
      <div class="container-fluid">
        <div className="App">
          <ImageSlider slides={SliderData} />
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
              <h2>Favourites</h2>

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

              <button className="btn btn-dark" onClick={removeAll}>
                Remove all
              </button>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
