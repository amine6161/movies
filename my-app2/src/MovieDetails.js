import React from 'react';
import movie from '../data.js';
import { Col, Row, Container } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { HashRouter as Router, Link } from 'react-router-dom';
const MovieDetails = (props) => {

  const movieId = parseInt(props.match.params.id);
  const movies = movie.filter(movies => {
    if (movies.id === movieId) {
      console.log(movies)
        return movies;
    }
    return false;
});


    return (
      <>
      <Container className="mt-5">
      <Row>
      <Router>
        <Link to="/" className="btn btn-primary btn-movie">
          <i className="fa fa-arrow-left" /> Back to Movie list
        </Link>
      </Router> 
      <div className="d-flex flex-details">
        <Col xs={12} sm= {6} md={4} className="boxcard-img">
          <img src={movies[0].imageUrl} alt={movies[0].title} className="imgMovie" />
        </Col>
        <Col xs={12} sm= {6} md={8} className="details-movie">
        
        <div className="white-card-details">
          <p className="tile-card">{movies[0].title}</p>
          <p className="subtitle-card">{movies[0].subtitle}</p>
          <p className="desc-card">{movies[0].description}</p>
          <div className="rat-card">
          <StarRatingComponent
            name={"movie rate"}
            value={movies[0].rate}
            starCount={5} 
            starColor={"#ffb400"} 
            emptyStarColor={"#333"} 
            editing={false} 
          />
          </div>
        </div>
        
    </Col>
    </div>
    </Row>
    </Container>
    </>
         );

}
export default MovieDetails;