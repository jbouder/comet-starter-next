import { render } from "@testing-library/react";
import Page from "./page";

test("Page", () => {
  const { baseElement } = render(<Page />);
  expect(baseElement).toBeTruthy();
});
