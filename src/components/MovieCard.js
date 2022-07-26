import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

// Tentei adicionar com o arrayOf e ele buscou o array e passou, mas deu um warning gigante.
MovieCard.propTypes = {
  movie: PropTypes.objectOf(Object).isRequired,
};

export default MovieCard;
