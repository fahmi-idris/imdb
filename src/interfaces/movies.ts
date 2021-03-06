import { DataMap, Pagination, StatusCode } from './common';

export type MovieType = 'series' | 'movie' | 'episode' | '';

export interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieParamsSearch {
  s: string;
  page: number;
  type: MovieType;
  isInfiniteScroll?: boolean;
}

export interface Movies extends StatusCode {
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
}

export interface MoviesState {
  data: DataMap<Movies>;
  index: string[];
  detail: Movies | null;
  pagination: Pagination;
  errors: string | null;
}
