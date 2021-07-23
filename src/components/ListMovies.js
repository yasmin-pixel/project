import React, { useState } from "react";
function ListMovies({
  name,
  id,
  releasedOn,
  watched,
  handleAddToFav,
  isFavourite,
  handleFavouritesClick,
}) {
  const [isWatched, setWatched] = useState(watched);
  const watchMovie = () => {
    setWatched(true);
  };

  return (
    <div>
      <li>{name}</li>
      <li>{id}</li>
      <li>{releasedOn}</li>
      <li>{watched}</li>
      {!isFavourite && (
        <button id={id} onClick={handleAddToFav}>
          Add to favorite
        </button>
      )}
      {isFavourite && (
        <button id={id} onClick={handleFavouritesClick}>
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
    </div>
  );
}

export default ListMovies;
