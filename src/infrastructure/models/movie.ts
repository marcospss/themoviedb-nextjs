import { Genre, ProductionCompanies } from './common';

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  iso_639_1: string;
  name: string;
};

export type MovieItem = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: false;
  vote_average: string;
};

export type MoviesDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResults = {
  page?: number;
  results?: MovieItem[];
  total_pages?: number;
  total_results?: number;
};
