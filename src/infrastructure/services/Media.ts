import axios, { AxiosResponse } from '~/infrastructure/settings/axios';
import { paramsDefault } from '~/infrastructure/settings/api';
import { MovieResults, MoviesDetails } from '~/infrastructure/models/movie';
import { ParamsUrl } from '~/infrastructure/models/api';

export class Media {
  discover({
    sortBy = 'popularity.desc',
    withGenres = '',
    year = new Date().getFullYear(),
    page,
  }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/discover/movie?${paramsDefault}&page=${page}&sort_by=${sortBy}&with_genres=${withGenres}&year=${year}&include_adult=false&include_video=false`
    );
  }

  search({ query, page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/search/movie?${paramsDefault}&page=${page}&query=${query}&include_adult=false`
    );
  }

  details({ mediaId }: ParamsUrl): Promise<AxiosResponse<MoviesDetails>> {
    return axios.get<MoviesDetails>(`/movie/${mediaId}?${paramsDefault}`);
  }

  recommendations({ mediaId, page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/movie/${mediaId}/recommendations?${paramsDefault}&page=${page}`
    );
  }

  similar({ mediaId, page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/${mediaId}/similar?${paramsDefault}&page=${page}`);
  }

  nowPlaying({ page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/now_playing?${paramsDefault}&page=${page}`);
  }

  popular({ page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/top_rated?${paramsDefault}&page=${page}`);
  }

  upcoming({ page }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/upcoming?${paramsDefault}&page=${page}`);
  }
}
