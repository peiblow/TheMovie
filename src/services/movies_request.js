import api from './api';

class MoviesRequests {
    static getPopularMovies () {
      return api.get('/movie/popular')
    }
  
    static getTopRatingMovies () {
      return api.get('/movie/top_rated')
    }
}

export default MoviesRequests