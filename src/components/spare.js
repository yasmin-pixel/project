import React, { useState, useEffect } from "react";
import axios from "axios";


const AddFavourite = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);
    // const [filterParam, setFilterParam] = useState([]);‌
    const onChange = (event) => {
      // setFilterParam(event.target.value);
      event.preventDefault();
      setSearchMovie(event.value);
    };
    //function - filter + compare - event value - clicking the button + compares it to the data from api
    //
  
    {movies.filter(person => person.age < 60).map(filteredPerson => (
      <li>
        {filteredPerson.name}
  
    const getListMovies = async () => {
      const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");
      setMovies(response.data);
    };
  
    useEffect(() => {
      getListMovies();
    }, []);
  
    return (
      {/* // movies.filter({movies} => target.value)
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie"
                value={searchMovie}
                onChange={onChange}
              />
            </div>
          </div>
        </div> */}
      {/* </div> */}
    );
  };
  export default AddFavourite;
  