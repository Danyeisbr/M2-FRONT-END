const apiKey = "d4c76611";

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_MOVIES", payload: data });
      });
  };
}

export function removeMovieFavorite(idMovie) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: idMovie
    }
}

export function getMovieDetail(idDetail) {
    return function (dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idDetail}`)
        .then((response) => response.json())
        .then((data) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
      });
    }
}