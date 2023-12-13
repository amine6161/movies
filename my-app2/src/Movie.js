import React from 'react';
import { Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { HashRouter as Router, Link } from 'react-router-dom';

const Movie = (props) => {
     return (
     <Col xs={12} sm= {6} md={4} className="card-movie">
         <img src={props.movieList.imageUrl} alt={props.movieList.title} className="imgMovie" />
         <div className="white-card">
         <p className="tile-card">{props.movieList.title}</p>
         <p className="subtitle-card">{props.movieList.subtitle}</p>
         <p className="desc-card">{props.movieList.description}</p>
         <p className="rat-card">
            <StarRatingComponent
                name={"movie rate"}
                value={props.movieList.rate}
                starCount={5} 
                starColor={"#ffb400"} 
                emptyStarColor={"#333"} 
                editing={false} 
        />
       </p>
       <Router>
            <Link to={`/movie/${props.movieList.id}`} className="btn btn-primary btn-movie">
                Movie Details
                <i class="fas fa-chevron-right"></i>
            </Link>
        </Router>
         </div>
     </Col>  );
}
 
export default Movie;