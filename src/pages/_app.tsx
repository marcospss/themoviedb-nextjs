import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import ResetStyle from '~/application/styles/reset';
import theme from '~/application/styles/theme';
import '~/application/styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
