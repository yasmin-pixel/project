    #List technologies used

    > JavaScript
    > CSS
    >React
    >Bootstrap

    # Document your planning and tell a story about your development process and problem-solving strategy

For this project, I started off with a wireFrame that outlined where the different components will go. I designed my web brower to be simple with buttons allocated to diffrent jobs and with a slider which shows the user the diffrent type of movies. Even though this was not one of the Deliverables but I wanted this feature to be displayed for the user.

Once I knew what I wanted on my web brower. I started to think about diffrent components that I would need and what I should call them.

> Header.js
> ListMovies.js
> ImageSlider.js
> SliderData.js

Then using the URL provided I retrieved the data from the API.

<const getMovies = async () => {
const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");
// console.log(response.data);
setMovies(response.data);>

};
I had to install axios in order to get the information I needed for my web broswer. Once I had the information I had to render the name, id ,realsed on and if it has been watched or not.
<const [movies, setMovies] = useState([]);>
<const [favourites, setFavourites] = useState([]);>
I created states which holds the information of the movies.
Then started to use these states and setStates to make diffrent functions.
First function was to add on a item.
<const addToFavourites = (event) => {
const id = parseInt(event.target.id);
const foundMovie = movies.find((movie) => movie.id === id);
setFavourites([...favourites, foundMovie]);
};>

Then used a condition for which bascally state when an onClick happens and the item is true add it on to the favourite list if nothing happens. I used a bang to swap the condition.
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
I followed the same format for the rest of the conponents.
