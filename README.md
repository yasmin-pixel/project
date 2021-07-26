    #Technologies used

    > JavaScript
    > CSS
    >React
    >Bootstrap
    >Axios

    ##User stories

• As a user I want to be able to add a new items from the movie list provided. So that I know it saved and I don’t have to search for the movie again.
• As a user I want to take a look at what I have saved in my favourite list.
• As a user I want to be able to Edit a name of a movie.
• As a user I want to be able to mark a movie as watched so that I know that I have watched that movie.
• As a user I want to remove an item form the favourite list.
• As a user I want to remove all watched movies form my list. So that I can remove all the movies at once.

    ### Document your planning and tell a story about your development process and problem-solving strategy

For this project, I started off with a wireFrame that outlined where the different components will go. I designed my web brower to be simple with buttons allocated to diffrent jobs and with a slider which shows the user the diffrent types of movies. Even though this was not one of the Deliverables but I wanted this feature to be displayed for the user.

Once I knew what I wanted on my web brower. I started to think about diffrent components that I would need and what I should call them.

> Header.js
> ListMovies.js
> ImageSlider.js
> SliderData.js
> App.js

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

Then used a condition for which bascally state when an onClick happens and the item is true add it on to the favourite list if not nothing happens. I used a bang to swap the condition.

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
I followed the similar format for the rest of the conponents and built my web browers up one component at a time.

Then I added a component that I really wanted to try out and challenge myself a little. So I bulit a slider component that shows images when you click to the left or right.

Here's some code for the slider component:

<>

function ImageSlider({ slides }) {
const [current, setCurrent] = useState(0);
const length = slides.length;
const nextSlide = () => {
setCurrent(current === length - 1 ? 0 : current + 1);
};
console.log(current);

if (!Array.isArray(slides) || slides.length <= 0) {
return null;
}
const prevslide = () => {
setCurrent(current === 0 ? length - 1 : current - 1);
};
return (

<section className="slider">
<FaArrowAltCircleLeft className="left-arrow" onClick={prevslide} />
<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

what I struggled on:

Edit part of the project I found complicated and I struggled to get the component to work. I reserched alot and even tried to do simliar method as what I did for watch/watched but did not work.
