import { DataMap, Pagination } from './common';

type MovieType = 'series' | 'movie';

export interface MovieRating {
  Source: string;
  Value: string;
}

export interface Movies {
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  Type: MovieType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MoviesState {
  data: DataMap<Movies>;
  index: string[];
  pagination: Pagination | null;
}
