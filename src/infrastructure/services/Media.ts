import axios, { AxiosResponse } from '~/infrastructure/settings/axios';
import { paramsDefault } from '~/infrastructure/settings/api';
import { MovieResults, MoviesDetails } from '~/infrastructure/models/movie';
import { ParamsUrl } from '~/infrastructure/models/api';

export class Media {
  discover({
    sortBy = 'popularity.desc',
    page = 1,
  }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/discover/movie?${paramsDefault}&page=${page}&sort_by=${sortBy}&include_adult=false&include_video=false`
    );
  }

  search({ query, page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/search/movie?${paramsDefault}&page=${page}&query=${query}&include_adult=false`
    );
  }

  details({ mediaId }: ParamsUrl): Promise<AxiosResponse<MoviesDetails>> {
    return axios.get<MoviesDetails>(`/movie/${mediaId}?${paramsDefault}`);
  }

  recommendations({ mediaId, page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(
      `/movie/${mediaId}/recommendations?${paramsDefault}&page=${page}`
    );
  }

  similar({ mediaId, page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/${mediaId}/similar?${paramsDefault}&page=${page}`);
  }

  nowPlaying({ page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/now_playing?${paramsDefault}&page=${page}`);
  }

  popular({ page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/top_rated?${paramsDefault}&page=${page}`);
  }

  upcoming({ page = 1 }: ParamsUrl): Promise<AxiosResponse<MovieResults>> {
    return axios.get<MovieResults>(`/movie/upcoming?${paramsDefault}&page=${page}`);
  }
}
