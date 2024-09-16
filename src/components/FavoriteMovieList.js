import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeFavorite } from "../actions/movieActions";

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;

  const handleRemoveFavorite = (movie) => {
    props.removeFavorite(movie);
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id} onClick={() => handleRemoveFavorite(movie.id)}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span class="material-icons">remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

const mapActionsToProps = {
  removeFavorite,
};

export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);
