# NODE TS BOILERPLATE
This is a a boilerplate project for kick starting the development of backend using
node-ts.

## Purpose
Using the project, developers can directly begin working on the project without
setting up the structure. They can fork this repo, clone it in local and directly
start working on the development part.

## Tech-stack
- Typescript
- Node
- Firestore 

## Installation 
1. install the dependencies using the command: `yarn`
2. Rename the file `.env.sample` to `.env` and input the values as per your requirements
3. Transpile the typescript code using the following command: `yarn build`
4. Start the app using `yarn start`
5. Or you can simply start the app using the following command in dev mode: `yarn dev`
6. After that, go to: `http://localhost:<your_port_number>/healthz` to check if the server is running
7. If the app is up and running, run the APIs on Postman


## Available scripts
- `build` - Transpile TypeScript to ES6,
- `dev` - To run the app without transpile to ES6,
- `start` - Run the transpiled app
- `format` - Format the whole project according the set config