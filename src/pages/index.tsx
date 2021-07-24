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

const setWidth = (index: number): number => {
  return index < 1 ? 780 : 300;
};

const setHeight = (index: number): number => {
  return index < 1 ? 439 : 169;
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
            srcImage={item.backdrop_path}
            title={item.title}
            height={setHeight(index)}
            width={setWidth(index)}
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
