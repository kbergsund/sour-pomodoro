import './scss/App.scss';
import React, { Fragment } from 'react';
import MovieContainer from './components/MovieContainer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Fragment>
      <Header />
      <MovieContainer />
    </Fragment>
  );
}

export default App;
