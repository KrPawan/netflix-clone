import React from "react";
import "./App.css";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending videos" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated videos" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="COmedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchACtionMovies} />

      <Footer />
    </div>
  );
}

export default App;
