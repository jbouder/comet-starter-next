import { render } from "@testing-library/react";
import Page from "./page";
import { RecoilRoot } from "recoil";

test("Page", () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  expect(baseElement).toBeTruthy();
});
