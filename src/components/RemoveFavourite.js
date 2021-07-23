import React, { useState } from "react";
function RemoveFavourite({
  name,
  id,
  releasedOn,
  handleFavouritesClick,
  isFavourite,
}) {
  return (
    <div>
      <li>{name}</li>
      <li>{id}</li>
      <li>{releasedOn}</li>
      {!isFavourite && (
        <button id={id} onClick={handleFavouritesClick}>
          Remove From Favourites
        </button>
      )}
    </div>
  );
}

export default RemoveFavourite;
