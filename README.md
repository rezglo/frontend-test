<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
Front-end engineer challenge
============================
This challenge has been designed to assess the ability of a front-end candidate to solve
real-world problems using our current technology stack. While the difficulties
arising during this project are real, the project itself is a mock and will not
be used by us for business purposes.

## Submission instructions
1. Fork this repository on github.
2. Complete the project as described below within your fork.
3. Keep the commit history - don't squash.
4. Push all of your changes to your fork on github and work with descriptive pull request.
5. A cup of ☕ or 🍵.

## Project description
Make a simplified slack clone.

Structure:
1. system login (only sign in and use fake data user)
2. sidebar on the left:
  + list of channels
    + add / remove button
  + list of users - direct messages
3. chat window on the right
  + list of messages
    + each message
      + avatar
      + username
      + timestamp
      + message
      + edit / remove button
  + comment box

## Implementation instructions:
1. use placeholders (both UI elements and actions / reducers) in place of features you didn't have time to implement - overall code organization and project structure are more important than implementation details;
2. simplistic design will be completely acceptable - don't waste much time on it
3. mock channels and users
4. mock short history of conversations in channels / direct messages
5. store everything in memory only (no need to persist data), but mock ajax calls and make these calls asyncrounous
6. strive for [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages)

## Essential technology stack
1. [react](https://facebook.github.io/react) (+ jsx)
2. [redux](http://redux.js.org), [MobX](https://mobx.js.org), [zustand](https://github.com/pmndrs/zustand) or [React Context API](https://es.reactjs.org/docs/context.html) (+ storage)
3. [react-router](https://github.com/reactjs/react-router) (+ route)
4. [Moment](https://momentjs.com/docs/), [date-fns](https://date-fns.org/), etc. (+ date)
5. Any UI Framework as [Antd](https://ant.design/docs/react/introduce), [Material](https://mui.com/material-ui/getting-started/installation/), ect.

## Remarks:
+ Use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for ajax. No need to implement backend - mock response data and simulate latency (e.g. with `setTimeout`)
+ The correct use of hooks (or custom hooks) will be valued if used
+ Use correct spelling

## Evaluation criteria (in order of importance)
1. Code organization
2. Code readability (including comments)
3. Stick to the tech stack described above
4. Commit history - structure and quality
5. Completeness
6. Test coverage
>>>>>>> 942166c3a2940deb0424a35f186c893da4165d97
