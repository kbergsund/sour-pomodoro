import logo from './logo.svg';
import './scss/App.scss';
import React, { Fragment } from 'react';
import MovieContainer from './components/MovieContainer';
import Header from './components/Header';





function App() {
  return (
    <Fragment>
      <Header />
      <MovieContainer />
    </Fragment>
  );
}

export default App;
