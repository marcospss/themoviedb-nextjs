import axios from '~/infrastructure/settings/axios';
import { paramsDefault } from '~/infrastructure/settings/api';

import { Media } from './Media';
import mediaResults from '@mocks/media-results.json';
import mediaSearch from '@mocks/media-search.json';
import mediaDetails from '@mocks/media-details.json';

jest.mock('~/infrastructure/settings/axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const currentYear = new Date().getFullYear();
const media = new Media();
const mediaType = 'movie';
const mediaId = '603';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Media - Service', () => {
  it('should be defined', () => {
    expect(media).toBeDefined();
  });

  it('should return details', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaDetails);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const details = await media.details({ mediaId });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/${mediaType}/${mediaId}?${paramsDefault}`);
    expect(details).toEqual(mediaDetails);
  });

  it('should return a list of discover', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const discover = await media.discover({ page: 1 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/discover/${mediaType}?${paramsDefault}&page=1&sort_by=popularity.desc&with_genres=&year=${currentYear}&include_adult=false&include_video=false`
    );
    expect(discover).toEqual(mediaResults);
  });

  it('should return a list of search', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaSearch);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const search = await media.search({ page: 1, query: 'matrix' });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/search/${mediaType}?${paramsDefault}&page=1&query=matrix&include_adult=false`
    );
    expect(search).toEqual(mediaSearch);
  });

  it('should return a list of recommendations', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const recommendations = await media.recommendations({ page: 1, mediaId });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/${mediaType}/${mediaId}/recommendations?${paramsDefault}&page=1`
    );
    expect(recommendations).toEqual(mediaResults);
  });

  it('should return a list of similar', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const similar = await media.similar({ page: 1, mediaId });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/${mediaType}/${mediaId}/similar?${paramsDefault}&page=1`
    );
    expect(similar).toEqual(mediaResults);
  });

  it('should return a list of nowPlaying', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const nowPlaying = await media.nowPlaying({ page: 1 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/${mediaType}/now_playing?${paramsDefault}&page=1`
    );
    expect(nowPlaying).toEqual(mediaResults);
  });

  it('should return a list of popular', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const popular = await media.popular({ page: 1 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/${mediaType}/popular?${paramsDefault}&page=1`);
    expect(popular).toEqual(mediaResults);
  });

  it('should return a list of topRated', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const topRated = await media.topRated({ page: 1 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/${mediaType}/top_rated?${paramsDefault}&page=1`);
    expect(topRated).toEqual(mediaResults);
  });

  it('should return a list of upcoming', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaResults);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const upcoming = await media.upcoming({ page: 1 });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/${mediaType}/upcoming?${paramsDefault}&page=1`);
    expect(upcoming).toEqual(mediaResults);
  });
});
