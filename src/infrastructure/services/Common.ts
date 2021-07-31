import axios, { AxiosResponse } from '~/infrastructure/settings/axios';
import { paramsDefault } from '~/infrastructure/settings/api';
import { Genres, Credits } from '~/infrastructure/models/common';
import { ParamsUrl } from '~/infrastructure/models/api';

export class Common {
  genre({ mediaType }: ParamsUrl): Promise<AxiosResponse<Genres>> {
    return axios.get<Genres>(`/genre/${mediaType}/list?${paramsDefault}`);
  }

  credits({ mediaType, mediaId }: ParamsUrl): Promise<AxiosResponse<Credits[]>> {
    return axios.get<Credits[]>(`/${mediaType}/${mediaId}/credits?${paramsDefault}`);
  }
}
