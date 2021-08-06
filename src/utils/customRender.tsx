/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import theme from '~/application/styles/theme';

const customRender = (ui: ReactElement, renderOptions?: RenderOptions) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react';
export { customRender as render };
