# Comet Starter - NextJS

The goal of this project is to provide a NextJS starter application, which comes pre-configured with the USWDS-based [Comet Component Library](https://github.com/MetroStar/comet) as well as other tools to accelerate development. Some of these tools are as follows:

- Tooling: [Turbopack](https://turbo.build/)
- Platform: [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- Component Library: [Comet Component Library](https://github.com/MetroStar/comet)
- Data Visualization: [Victory Charts](https://formidable.com/open-source/victory/)
- State Management: [Recoil](https://recoiljs.org/)
- Form Validation: [React Hook Form](https://react-hook-form.com/)
- Unit Testing: [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- End-to-End (E2E) Testing: [Playwright](https://playwright.dev/)
- API support: Next.js APIs with [Axios](https://axios-http.com/) and [React Query](https://tanstack.com/query/v3/)
- Authentication support: [NextAuth](https://next-auth.js.org/) with [Keycloak](https://www.keycloak.org/)

## Table of Contents

1. [Running the Project Locally](#running-the-project-locally)
2. [Running Unit Tests](#running-unit-tests)
3. [Running End-to-End (E2E) Tests](#running-end-to-end-e2e-tests)

## Running the Project Locally

1. To install dependencies, run the following:

```sh
npm install
```

2. To run locally with SSO, add a file called `.env.local` to the `comet-starter-next` directory. Copy and paste the template below and replace the placeholder values with your own (optional):

```
KEYCLOAK_CLIENT_ID=[SOME_KEYCLOAK_CLIENT_ID] # Ex: dev-client
KEYCLOAK_CLIENT_SECRET=[SOME_KEYCLOAK_CLIENT_SECRET] # Ex: 123456789abcdefg
KEYCLOAK_ISSUER=[SOME_KEYCLOAK_ISSUER] # Ex: http://localhost:8088
```

```sh
npm run dev
```

## Running Unit Tests

To make sure your changes do not break any unit tests, run the following:

```sh
npm run test
```

Ensure to review the coverage directory for code coverage details.

```sh
npm run test:coverage
```

## Running End to End (E2E) Tests

Note: running E2E tests requires the app to be running as well, run the following:

```sh
npm run e2e
```
