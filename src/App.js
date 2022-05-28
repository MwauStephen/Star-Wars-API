import React, { Fragment } from "react";
import "./App.css";

import MoviesList from "./Components/MoviesList";

const App = () => {
  return (
    <Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </Fragment>
  );
};

export default App;
