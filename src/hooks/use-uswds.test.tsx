import { act, renderHook } from '@testing-library/react';
import useUswds from './use-uswds';

test('should call signIn successfully', async () => {
  const { result } = renderHook(() => useUswds());

  await act(async () => {
    result.current.headerOn(document.body);
  });
  expect(result.current.headerOn).toBeTruthy();
});

test('should call signOut successfully', async () => {
  const { result } = renderHook(() => useUswds());

  await act(async () => {
    result.current.headerOff(document.body);
  });
  expect(result.current.headerOff).toBeTruthy();
});
