import { vi } from 'vitest';
import "@testing-library/jest-dom/vitest";
import React from 'react'; // Import the React library

vi.mock('@metrostar/comet-uswds', async () => {
  return await import('./mocks/comet-uswds.tsx');
});

vi.mock('@metrostar/comet-extras', async () => {
  return await import('./mocks/comet-extras.tsx');
});

vi.mock('@metrostar/comet-uswds', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    Card: ({ children }) => React.createElement('div', null, children),
    Alert: ({ children }) => React.createElement('div', null, children),
  };
});
