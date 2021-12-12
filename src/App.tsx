import React from 'react';
import { Row } from './compornents/Row';
import './App.css';
import { requests } from './request';
import { Banner } from './compornents/Banner';
import { Nav } from './compornents/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.feachNetflixOriginals} isLargeRow />
      <Row title='Top Rated' fetchUrl={requests.feactTopRated} />
      <Row title='Comedy Movies' fetchUrl={requests.feactComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.feactRomanceMovies} />
      <Row title='DOcumentaries' fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
