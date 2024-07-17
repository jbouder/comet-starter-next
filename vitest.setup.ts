import { vi } from 'vitest';
import "@testing-library/jest-dom/vitest";
vi.mock('@metrostar/comet-uswds', async () => {
  return await import('./mocks/comet-uswds.tsx');
});

vi.mock('@metrostar/comet-extras', async () => {
  return await import('./mocks/comet-extras.tsx');
});
