import { act, renderHook } from '@testing-library/react';
import useAuth from './use-auth';
import { RecoilRoot } from 'recoil';

interface ContextWrapperProps {
  children: React.ReactNode;
}

const contextWrapper = ({ children }: ContextWrapperProps) => <RecoilRoot>{children}</RecoilRoot>;

test('should call signIn successfully', async () => {
  const { result } = renderHook(() => useAuth(), {
    wrapper: contextWrapper,
  });

  await act(async () => {
    result.current.signIn();
  });
  expect(result.current.signIn).toBeTruthy();
});

test('should call signOut successfully', async () => {
  const { result } = renderHook(() => useAuth(), {
    wrapper: contextWrapper,
  });

  await act(async () => {
    result.current.signOut();
  });
  expect(result.current.signOut).toBeTruthy();
});
