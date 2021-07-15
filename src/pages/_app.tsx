import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import ResetStyle from '~/application/styles/reset';
import theme from '~/application/styles/theme';
import '~/application/styles/global.css';

import Navigation from '~/application/shared/Navigation';
import Footer from '~/application/shared/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
