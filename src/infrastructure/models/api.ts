export type ParamsUrl = {
  mediaId?: string;
  mediaType?: string;
  page?: number;
  query?: string;
  sortBy?: string;
  withGenres?: string;
  year?: number;
};

export type StatusErrors = {
  status_code: number;
  status_message: string;
  success: boolean;
};
