import { GetServerSideProps, NextPage } from 'next';
import Head from '~/application/shared/Head';

import { Media } from '~/infrastructure/services';
import { MovieResults, StatusErrors } from '~/infrastructure/models';
import { Grid } from '~/application/styles/commons';
import CardLarge from '~/application/shared/components/CardLarge';

type HomeProps = {
  popular: MovieResults;
  error: StatusErrors;
};

const media = new Media();

const displayOverview = (index: number): boolean => {
  return index >= 1 && index <= 4 ? true : false;
};

const IndexPage: NextPage<HomeProps> = ({ popular }) => {
  return (
    <>
      <Head />
      <Grid>
        {popular?.results?.map((item, index: number) => (
          <CardLarge
            key={item.id}
            id={item.id}
            displayOverview={displayOverview(index)}
            mediaType="movie"
            overview={item.overview}
            srcImage={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
            title={item.title}
          />
        ))}
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await media.popular({ page: 1 });
    return {
      props: {
        popular: data,
      },
    };
  } catch (error) {
    return { props: { error: error?.response?.data } };
  }
};

export default IndexPage;
