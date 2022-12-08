import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { TestWrapper } from 'test-utils/TestWrapper';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: TestWrapper, ...options });

export * from '@testing-library/react';
export { testLocation } from 'test-utils/testLocation';
export { customRender as render };
