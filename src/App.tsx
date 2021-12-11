import React from 'react';
import { Row } from './compornents/Row';
import './App.css';
import { requests } from './request';
import { Banner } from './compornents/Banner';

function App() {
  return (
    <div className='App'>
      <Banner />
      <h3> 　もう寝たい</h3>
      <Row title='Netflix Originals' fetchUrl={requests.feachNetflixOriginals} isLargeRow />
      <Row title='Top Rated' fetchUrl={requests.feactTopRated} />
      <Row title='Action Movies' fetchUrl={requests.feactActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.feactComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.feactHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.feactRomanceMovies} />
      <Row title='DOcumentaries' fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
