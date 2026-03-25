# React Testing Assignment

This project demonstrates Jest and React Testing Library (RTL) setup in a React app, including both basic component tests and interaction tests.

## Setup and Tools

The project uses:

- Jest
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event

Jest DOM matchers are configured in [src/setupTests.js](src/setupTests.js).

## Requirement Coverage

### Level 1

Implemented tests for isolated UI components:

- Button: [src/components/Button.test.js](src/components/Button.test.js)
- Card: [src/components/card.test.js](src/components/card.test.js)
- Input: [src/components/input.test.js](src/components/input.test.js)

What is verified:

- Component renders without crashing
- Correct text/value is displayed from props

### Level 2

Implemented interaction tests with userEvent:

- Counter increment click test: [src/components/userEvent.test.js](src/components/userEvent.test.js)
- Input typing updates value: [src/components/input.test.js](src/components/input.test.js)

What is verified:

- Clicking Increment updates the displayed count to 1
- Typing in an input updates the input value

## Run the Tests

From the project root:

```bash
pnpm test
```

Run once in CI mode:

```bash
$env:CI='true'; pnpm test
```

## Available Scripts

In the project directory, you can run:

```bash
pnpm start
pnpm test
pnpm build
```
