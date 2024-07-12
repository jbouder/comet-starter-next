import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "./page";
import * as useAuthMock from "../../hooks/use-auth";
import { RecoilRoot } from "recoil";

vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

const mockUsername = "username";
const mockPassword = "password";

test("Page", () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  expect(baseElement).toBeTruthy();
});

test("should simulate a login attempt with blank fields", async () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(2);
});

test("should simulate a login attempt with blank username", async () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.type(screen.getByLabelText("Password"), mockPassword);
  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(1);
});

test("should simulate a login attempt with blank password", async () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.type(screen.getByLabelText("Username"), mockUsername);
  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(1);
});

test("should simulate a successful login attempt", async () => {
  vi.spyOn(useAuthMock, "default").mockReturnValue({
    isSignedIn: false,
    currentUserData: null,
    error: null,
    signIn: vi.fn(),
    signOut: vi.fn(),
  });

  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.type(screen.getByLabelText("Username"), mockUsername);
  await userEvent.type(screen.getByLabelText("Password"), mockPassword);

  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(0);
});

test("should simulate a successful login attempt when signed in", async () => {
  vi.spyOn(useAuthMock, "default").mockReturnValue({
    isSignedIn: true,
    currentUserData: null,
    error: null,
    signIn: vi.fn(),
    signOut: vi.fn(),
  });

  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.type(screen.getByLabelText("Username"), mockUsername);
  await userEvent.type(screen.getByLabelText("Password"), mockPassword);

  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(0);
});

test("should simulate an unsuccessful login attempt", async () => {
  vi.spyOn(useAuthMock, "default").mockReturnValue({
    isSignedIn: false,
    currentUserData: null,
    error: "Error",
    signIn: vi.fn(),
    signOut: vi.fn(),
  });

  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.type(screen.getByLabelText("Username"), mockUsername);
  await userEvent.type(screen.getByLabelText("Password"), mockPassword);

  await userEvent.click(
    screen.getByText("Sign In", { selector: "button[type=submit]" })
  );
  expect(baseElement.querySelectorAll(".usa-alert").length).toBe(1);
});

test("should cancel a login attempt", async () => {
  const { baseElement } = render(
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
  await userEvent.click(
    screen.getByText("Cancel", { selector: "button[type=button]" })
  );
  expect(baseElement.querySelectorAll(".usa-error-message").length).toBe(0);
});
