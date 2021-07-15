import { NextPage } from 'next';
import Head from '~/application/shared/Head';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head />
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js TypeScript!</a>
      </h1>
    </>
  );
};

export default IndexPage;
