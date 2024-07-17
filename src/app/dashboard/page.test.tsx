import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom';
import Dashboard from './page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import { useQuery } from '@tanstack/react-query';

// Mock the useQuery hook to simulate the loading state
vi.mock('@tanstack/react-query', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    useQuery: vi.fn(),
  };
});

describe('Dashboard', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    // Reset mock before each test
    vi.resetAllMocks();
  });

  test('renders the dashboard page', () => {
    // Mock the useQuery to return isLoading: true
    (useQuery as vi.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Dashboard />
        </QueryClientProvider>
      </RecoilRoot>
    );

    // Check if the main heading is rendered
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
    
    // Check if the loading spinner is rendered initially
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
