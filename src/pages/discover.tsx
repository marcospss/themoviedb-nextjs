import { GetServerSideProps, NextPage } from 'next';
import { useState, FocusEvent } from 'react';
import styled from 'styled-components';

import Head from '~/application/shared/Head';
import useSWRInfinite from '~/application/hooks/useSWRInfinite';
import { paramsDefault } from '~/infrastructure/settings/api';
import { Media, Common } from '~/infrastructure/services';
import { Genre, MovieItem } from '~/infrastructure/models';
import * as C from '~/application/styles/commons';
import CardPoster from '~/application/shared/components/CardPoster';

const Filters = styled(C.GridList)`
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
`;

const Input = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 1rem;
  width: 100%;
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  select {
    width: 100%;
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${({ theme: { colors } }) => colors.white};
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  }
  button {
    font-weight: bold;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    width: fit-content;
  }
`;

type DiscoverProps = {
  years: string[];
  genres: Genre[];
  sortOptions: SortOptionsProps[];
};

type SearchProps = {
  sortBy: string;
  withGenres: string;
  year: number;
};

type SortOptionsProps = {
  id: string;
  label: string;
};

const getYears = (): number[] => {
  const years: number[] = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear + 1; i >= 1900; i -= 1) {
    years.push(i);
  }
  return years;
};

const getSortByOptions = (): SortOptionsProps[] => [
  { id: 'popularity.desc', label: 'Popularity Descending' },
  { id: 'popularity.asc', label: 'Popularity Ascending' },
  { id: 'vote_average.desc', label: 'Rating Descending' },
  { id: 'vote_average.asc', label: 'Rating Ascending' },
  { id: 'primary_release_date.desc', label: 'Release Date Descending' },
  { id: 'primary_release_date.asc', label: 'Release Date Ascending' },
  { id: 'title.asc', label: 'Title (A-Z)' },
  { id: 'title.desc', label: 'Title (Z-A)' },
];

const media = new Media();
const common = new Common();

const DiscoverPage: NextPage<DiscoverProps> = ({ years, sortOptions, genres }) => {
  const currentYear = new Date().getFullYear();
  const [searchValue, setSearchValue] = useState<SearchProps>({
    sortBy: 'popularity.desc',
    withGenres: '',
    year: currentYear,
  });
  const [pathDiscover, setPathDiscover] = useState(
    `/discover/movie?${paramsDefault}&sort_by=${searchValue.sortBy}&with_genres=${searchValue.withGenres}&year=${searchValue.year}`
  );

  const onSetSearchValue = (
    event: FocusEvent<HTMLSelectElement> & {
      target: HTMLSelectElement;
    }
  ): void => {
    const {
      target: { name, value },
    } = event;
    setSearchValue((prev: SearchProps) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { response, error, isLoadingMore, size, setSize, isReachingEnd } =
    useSWRInfinite(pathDiscover);

  const triggerSearch = (): void => {
    const { sortBy, withGenres, year } = searchValue;
    setPathDiscover(
      `/discover/movie?${paramsDefault}&sort_by=${sortBy}&with_genres=${withGenres}&year=${year}`
    );
  };

  return (
    <>
      <Head
        title="The Movie Database (TMDb) | Is a community built movie and TV database."
        description="The Movie Database (TMDb) is a popular, user editable database for movies and TV shows."
        keywords="Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
        image="/static/imdb.png"
      />
      <Filters>
        <Input>
          <label htmlFor="year">Release Dates</label>
          <select
            defaultValue={searchValue.year}
            name="year"
            id="year"
            onBlur={(event) => onSetSearchValue(event)}>
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </Input>
        <Input>
          <label htmlFor="sortBy">Sort Results By</label>
          <select
            defaultValue={searchValue.sortBy}
            name="sortBy"
            id="sortBy"
            onBlur={(event) => onSetSearchValue(event)}>
            <option value="">Select Sort</option>
            {sortOptions.map((sort) => (
              <option key={sort.id} value={sort.id}>
                {sort.label}
              </option>
            ))}
          </select>
        </Input>
        <Input>
          <label htmlFor="withGenres">Genres</label>
          <select
            defaultValue={searchValue.withGenres}
            name="withGenres"
            id="withGenres"
            onBlur={(event) => onSetSearchValue(event)}>
            <option value="">Select Sort</option>
            {genres.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </Input>
        <Input>
          <button type="button" onClick={triggerSearch}>
            Search
          </button>
        </Input>
      </Filters>
      {error && (
        <C.Alert className="danger">
          <p>
            <strong>Something went wrong!</strong>
          </p>
        </C.Alert>
      )}
      <C.GridList>
        {!response ? (
          <h1>Loading...</h1>
        ) : (
          response.map((media: MovieItem) => (
            <CardPoster
              key={media.id}
              id={media.id}
              src={media.poster_path}
              title={media.title}
              overview={media.overview}
              mediaType="movie"
              hideOverflowTitle={false}
            />
          ))
        )}
      </C.GridList>
      <C.BoxCentered>
        <C.Button disabled={isLoadingMore || isReachingEnd} onClick={() => setSize(size + 1)}>
          {isLoadingMore ? 'Loading...' : isReachingEnd ? 'No more Results' : 'Load more'}
        </C.Button>
      </C.BoxCentered>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await media.discover({ page: 1 });
    const {
      data: { genres },
    } = await common.genre({ mediaType: 'movie' });

    return {
      props: {
        initialData: data,
        years: getYears(),
        sortOptions: getSortByOptions(),
        genres,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        initialData: null,
        years: getYears(),
        sortOptions: getSortByOptions(),
        genres: null,
        error: error?.response?.data,
      },
    };
  }
};

export default DiscoverPage;
