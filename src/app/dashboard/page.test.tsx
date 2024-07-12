import { render } from "@testing-library/react";
import Page from "./page";
import RecoilContextProvider from "../../providers/recoil-context-provider";

test("Page", () => {
  const { baseElement } = render(
    <RecoilContextProvider>
      <Page />
    </RecoilContextProvider>
  );
  expect(baseElement).toBeTruthy();
});
