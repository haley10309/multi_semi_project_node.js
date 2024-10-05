import React, { useState, useEffect } from "react";
import "./Home.scss";
import { NavLink, useLocation } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/movies");
        const body = await response.json();
        setMovies(body);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cover">
      <div className="row_box">
        {movies.map((movie) => (
          
          <div className="box" key={movie.number}>
            <NavLink to={`/board?movie_number=${movie.number}`}>
              <img src={movie.img_url} alt={movie.movie_name} />
            </NavLink>
            <h2>{movie.movie_name}</h2>
            <p>{movie.star_rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
