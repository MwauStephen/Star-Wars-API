import React, { Fragment, useState } from "react";
import "./App.css";

import MoviesList from "./Components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);

  // sending HTTP Request
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        console.log(response);

        // convert into readable object
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedData);
      });
  }
  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );
};

export default App;
