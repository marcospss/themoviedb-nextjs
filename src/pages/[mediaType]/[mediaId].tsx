import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import Head from '~/application/shared/Head';
import Image from '~/application/shared/components/Image';
import CardPoster from '~/application/shared/components/CardPoster';
import { Media } from '~/infrastructure/services';
import { MovieResults, MoviesDetails, StatusErrors } from '~/infrastructure/models';
import imageApi from '~/infrastructure/settings/imageApi';
import * as C from '~/application/styles/commons';
import * as S from './styles';

type DetailsProps = {
  details: MoviesDetails;
  recommendations: MovieResults;
  error: StatusErrors;
};

const media = new Media();

const convertMinutesToTime = (data: number | null): string => {
  if (!data) {
    return '';
  }
  const minutes = data % 60;
  const hours = (data - minutes) / 60;
  const totalMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}h ${totalMinutes}m`;
};

const DetailsPage: NextPage<DetailsProps> = ({ details, recommendations }) => {
  const backdropPath = details?.backdrop_path ? details.backdrop_path : 'null';
  const posterPath = details?.poster_path ? details.poster_path : 'null';
  const genres = details?.genres.map((genre) => genre.name).join(' | ');
  const keywords = details?.genres.map((genre) => genre.name).join(', ');
  return (
    <>
      <Head
        title={`${details.title} | The Movie Database (TMDb)`}
        description={details.overview}
        keywords={keywords}
        image={`${imageApi.secure_base_url}w780${details.backdrop_path}`}
      />
      <S.Container>
        <S.Breadcrumb>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>{details.title}</li>
          </ul>
        </S.Breadcrumb>
        <S.FigureBackDrop>
          <Image alt={details.title} height={439} width={780} src={backdropPath} />
        </S.FigureBackDrop>
        <S.Header>
          <S.FigurePoster>
            <Image alt={details.title} height={231} width={154} src={posterPath} />
          </S.FigurePoster>
          <S.Info>
            <S.Title>{details.title}</S.Title>
            <S.Category>{genres}</S.Category>
            {/* <S.Rating voteAverage={details.vote_average} /> */}
            <S.Runtime>Length: {convertMinutesToTime(details?.runtime)}</S.Runtime>
          </S.Info>
        </S.Header>
        <S.Overview>{details.overview}</S.Overview>
        {!!recommendations?.results?.length && (
          <S.Recommendations>
            <S.RecommendationsTitle>Recommendations</S.RecommendationsTitle>
            <C.GridList>
              {recommendations?.results?.map((movie) => (
                <CardPoster
                  key={movie.id}
                  id={movie.id}
                  src={movie.poster_path}
                  title={movie.title}
                  overview={movie.overview}
                  mediaType="movie"
                  hideOverflowTitle={false}
                />
              ))}
            </C.GridList>
          </S.Recommendations>
        )}
      </S.Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const mediaId = params?.mediaId?.toString();
    const { data: details } = await media.details({ mediaId });
    const { data: recommendations } = await media.recommendations({ mediaId });
    return {
      props: {
        details,
        recommendations,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: { details: {}, recommendations: {}, error: error?.response?.data },
    };
  }
};

export default DetailsPage;
