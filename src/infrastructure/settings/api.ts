export const api = {
  baseURL: 'https://api.themoviedb.org/3',
  apikey: process.env.API_KEY,
  language: 'en-US',
};

export const paramsDefault = `api_key=${api.apikey}&language=${api.language}`;
