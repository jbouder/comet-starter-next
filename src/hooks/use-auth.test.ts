import { act, renderHook } from "@testing-library/react";
import useAuth from "./use-auth";

test("should call signIn successfully", async () => {
  const { result } = renderHook(() => useAuth());

  await act(async () => {
    result.current.signIn();
  });
  expect(result.current.signIn).toBeTruthy();
});

test("should call signOut successfully", async () => {
  const { result } = renderHook(() => useAuth());

  await act(async () => {
    result.current.signOut();
  });
  expect(result.current.signOut).toBeTruthy();
});
