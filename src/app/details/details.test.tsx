"use client";
import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './[id]';
import { vi } from 'vitest';

// Mocking the hooks
import { useParams } from 'next/navigation';
import useAuth from '../../hooks/use-auth';

// Mocking the modules with correct paths
vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

vi.mock('../../hooks/use-auth', () => ({
  default: vi.fn(),
}));

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

describe('Details component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  test('Details component renders', () => {
    (useParams as vi.Mock).mockReturnValue({ id: '1' });
    (useAuth as vi.Mock).mockReturnValue({ isSignedIn: true });

    const { baseElement } = renderWithQueryClient(<Details />);
    expect(baseElement).toBeTruthy();
  });
});

