/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '~/application/styles/theme';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
