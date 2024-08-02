import { render } from '@testing-library/react';
import Page from './page';
import { RecoilRoot } from 'recoil';
import React from 'react';

// Mock the Alert component from the @components/comet module
vi.mock('@components/comet', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    Alert: ({ children, ...props }) => <div {...props}>{children}</div>,
  };
});

test('Page', () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>,
  );
  expect(baseElement).toBeTruthy();
});
