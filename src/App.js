import React, { Fragment } from "react";
import "./App.css";

import MoviesList from "./Components/MoviesList";

const App = () => {
  // sending HTTP Request
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/")
      .then((response) => {
        console.log(response);
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
      });
  }
  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movie />
      </section>
    </Fragment>
  );
};

export default App;
