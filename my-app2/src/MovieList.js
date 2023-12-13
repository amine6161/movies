import React, { useState } from 'react';
import Movie from '../Movies/Movie';
import AddMovie from '../AddMovie/AddMovie';
import StarRating from '../StarRating/StarRating';
import { Row, Container } from 'react-bootstrap';
function MovieList () {
    const [movie, setMovie] = useState([
        {
            id: 100,
            title: "Kingsglaive",
            subtitle: "Final Fantasy XV",
            description: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
            imageUrl: "../images/Kingsglaive_Final_Fantasy_XV.jpg",
            rate: 3
        },
        {
            id: 200,
            title: "Final Fantasy",
            subtitle: "Spirits Within",
            description: "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
            imageUrl: "../images/Final_Fantasy_Spirits_Within.jpg",
            rate: 4
        },
        {
            id: 300,
            title: "Ghost In The Shell",
            subtitle: "Ghost In The Shell",
            description: "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
            imageUrl: "../images/Ghost_In_The_Shell_2_0.jpg",
            rate: 5
        },
        {
            id: 400,
            title: "Appleseed Alpha",
            subtitle: "Appleseed Alpha",
            description: "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
            imageUrl: "../images/Appleseed_Alpha.jpg",
            rate: 4
        },
        {
            id: 500,
            title: "Resident Evil",
            subtitle: "Vendetta",
            description: "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
            imageUrl: "../images/Resident_Evil_Vendetta.jpg",
            rate: 5
        }
    ]);
    const [searchValue, setSearchValue] = useState("")
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    const [rate, setRate] = useState(null)
    const handleRate =(ratingValue)=>{
        setRate(ratingValue)
    }
    const handleClick = (e) => {
        e.preventDefault();
    let newMovie = movie.filter ( (el) => el.title.toUpperCase().search(searchValue.toUpperCase()) !== -1 && el.rate >= rate) 
       setMovie(newMovie)
        }
    let movieList = movie.map((movie, id) => {
        return <Movie movieList = {movie} key= {id}/>
    })
    
    const handleOk = (term) => {
        let moviesWillUpdate = [...movie];
        moviesWillUpdate.push(term);
        setMovie(moviesWillUpdate);
    };
    
    
    return ( 
     <>       
    <div className="header d-flex justify-content-between align-items-center">
    <h3 className="title-card">Movie Cards</h3>
    <div className="d-flex align-items-center">
        <form className="search d-flex">
        <input
          value={searchValue}
          onChange={handleSearch}
          type="text"
          className="form-control"
        />
        <input onClick ={handleClick} type="button" value="Search" className="search-movie btn btn-secondary"/>
      </form>
      <StarRating handleRate={handleRate} />
      </div>
      </div>
      <AddMovie onOk={handleOk}/>
      <Container>
      <Row>
      
        {movieList}
     
    </Row>
</Container>
</>
);
}
export default MovieList;