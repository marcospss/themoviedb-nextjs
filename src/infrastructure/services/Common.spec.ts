import axios from '~/infrastructure/settings/axios';
import { paramsDefault } from '~/infrastructure/settings/api';

import { Common } from './Common';
import mediaGenres from '@mocks/media-genres.json';
import mediaCredits from '@mocks/media-credits.json';

jest.mock('~/infrastructure/settings/axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const common = new Common();
const mediaType = 'movie';
const mediaId = '603';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Common - Service', () => {
  it('should be defined', () => {
    expect(common).toBeDefined();
  });

  it('should return a list of genre', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaGenres);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const genre = await common.genre({ mediaType });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/genre/${mediaType}/list?${paramsDefault}`);
    expect(genre).toEqual(mediaGenres);
  });

  it('should return a list of credits', async () => {
    mockedAxios.get.mockResolvedValueOnce(mediaCredits);
    expect(mockedAxios.get).not.toHaveBeenCalled();
    const credits = await common.credits({ mediaType, mediaId });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/${mediaType}/${mediaId}/credits?${paramsDefault}`
    );
    expect(credits).toEqual(mediaCredits);
  });
});
