import React, { useState } from "react";
function ListMovies({
  name,
  id,
  releasedOn,
  watched,
  handleAddToFav,
  isFavourite,
  handleFavouritesClick,
  handleEditChange,
}) {
  const [isWatched, setWatched] = useState(watched);
  const watchMovie = () => {
    setWatched(true);
  };
  const [edit, setEdit] = useState(name);

  const handleChange = () => {
    setEdit(name);
  };

  return (
    <div>
      <li>{name}</li>
      <li>{id}</li>
      <li>{releasedOn}</li>
      <li>{watched}</li>

      {!isFavourite && (
        <button id={id} className="btn btn-dark" onClick={handleAddToFav}>
          Add to favorite
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          className="btn btn-dark"
          onClick={handleFavouritesClick}
        >
          Remove From Favourites
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          style={isWatched ? { color: "green" } : { color: "red" }}
          onClick={watchMovie}
        >
          {isWatched ? "Watched" : "watch"}
        </button>
      )}

      <input
        value={name}
        type="text"
        placeholder="Edit your movie here"
        name="search"
        onChange={handleChange}
      ></input>

      <button
        name={name}
        className="edit btn-dark"
        onClick={handleChange}
        value={name}
      >
        Edit Movie
      </button>
    </div>
  );
}

export default ListMovies;
