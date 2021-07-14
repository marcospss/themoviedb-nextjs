export type Genres = {
  id: number;
  name: string;
};

export type Cast = {
  cast_id?: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
};

export type Crew = {
  credit_id: string;
  department: string;
  gender: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
};

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type ProductionCompanies = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
