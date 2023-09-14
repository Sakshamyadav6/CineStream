import React, { useState, useEffect } from "react";
import { Button, Carousel, Container, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const apikey = "6fbb0be61280dbf7c84db9e8c2e743db";
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        setPopularMovies(data.results);
      } else {
        console.error("Error fetching data from TMDB API");
      }
    } catch (error) {
      console.error("Error fetching data from TMDB API:", error);
    }
  };
  console.log(popularMovies);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 custom-image "
            src="https://assets.gqindia.com/photos/64faada34ece81993e1d2a02/16:9/pass/Jawan--From-Shah-Rukh-Khan-to-Vijay-Sethupathi_-who-plays-what-_002.jpg"
            alt="SRK"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 custom-image"
            src="https://pbs.twimg.com/media/F0fWgT-aIAA4hUB.jpg"
            alt="sallar"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 custom-image"
            src="https://www.koimoi.com/wp-content/new-galleries/2021/11/taarak-mehta-ka-ooltah-chashmah-crosses-another-major-milestone-completes-3300-happysodes-001.jpg"
            alt="tmkoc"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Container>
        <h4>Trending</h4>
        <h5 style={{ color: "blue" }}>Movies</h5>
        <Row>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
