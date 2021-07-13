import { NextPage } from 'next';
import Head from '~/application/shared/Head';
import Navigation from '~/application/shared/Navigation';
import Footer from '~/application/shared/Footer';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head />
      <Navigation />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js TypeScript!</a>
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
