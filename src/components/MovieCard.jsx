import React from "react";
import { Card, Button, Col, Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <Col md={3} sm={6} xs={12}>
      <Card className="movie-card">
        <div className="movie-poster">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <div className="movie-details">
            <Badge variant="secondary">
              {movie.release_date.substring(0, 4)}
            </Badge>
            <Badge variant="secondary">{movie.vote_average} Rating</Badge>
          </div>
          <Card.Text> {truncateText(movie.overview, 100)}</Card.Text>
          <Button variant="primary" className="learn-more-button">
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
