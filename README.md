Front-end [Slack](https://slack.com/) clone
============================
Author: Angel Dario Ladron de Guevara Gomez
Email: [dariogomez1011@gmail.com]

## Important instrucions for mock-data usage with mockoon
In order to load the app data it is necessary to mount the mock-server that hosts the mock-data.json file. The mock-data.json file is located at project-root/src/mock/.

To install the mockoon CLI you can go to [mockoon](https://github.com/mockoon/mockoon/tree/main/packages/cli#installation) and follow the CLI installation instructions or:
1. $ npm install -g @mockoon/cli
2. Go to the mock-data.json directory at project-root/src/mock/.
3. Open a terminal
4. $ mockoon-cli start --data mock-data.json --port 3001
5. You should see a message containing "Server started on port 3001"
6. Done! Now you can use and test the app.

## Instructions to run the app
1. Go to the project root 
2. Open a terminal
3. $ npm install
4. $ npm start

## Project description
Simplified slack clone.

Structure:
1. system login (only sign in) username: dariolggomez password: 1234
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

## Essential technology stack
1. [react](https://react.dev/) (+ jsx)
2. [redux](https://redux.js.org/) (+ state-management)
3. [react-router](https://github.com/reactjs/react-router) (+ route)
4. [mockoon](https://mockoon.com/) (+ mock-data)
5. [Moment](https://momentjs.com/docs/) (+ date)
6. [styled-components](https://styled-components.com/), [Material](https://mui.com/material-ui/getting-started/installation/).

