# Social Media Timeline Example

Social Media Timeline Example is a Single Page App built with React, Redux, and ImmutableJS.

Built as a part of a [Benefitfocus](https://www.benefitfocus.com/) Coding Challenge. 


## Running the Social Media Timeline Example

Verify if you use Node.js 6.x or higher (Node.js ^10 is recommended) before running the starter kit.

1. Clone the master branch of Social Media Timeline Example.

```
git clone -b master https://github.com/felkelhl/social-media-timeline-example.git
cd social-media-timeline-example
```

2. Install the dependencies. Make sure that you use Yarn 1.0.0 or higher.

```
yarn
```

3. Run the starter kit in development mode:

```
yarn start
```

4. Social Media Timeline Example is seeded with a starting initial tweet.

The application will be running on [http://localhost:3000]. The terminal will tell your the exact ports.

## Project Structure

The project structure is broken down into static components, stateful containers, as well as the actions and reducers for Redux.

```
social-media-timeline-example
├── node_modules                # Global Node.js modules
├── src                         # Front-end source code
│   ├── actions                 # Contains all of the actions for Redux
│   │   ├── index.js            # Entry point for the Redux actions
│   │   └── index.spec.js       # Testing file for the Redux actions in the index file
|   ├── components              # Contains all of the static components to display various views
|   │   └── App.js              # Entry point for the components through the root index.js file
│   ├── containers              # Contains all of the stateful components to display aggregate the state data
│   ├── index.js                # Entry point for the React application
│   └── reducers                # Contains all of the reducers for Redux
│       └── index.js            # Entry point for the Redux reducers contained within the folder
```

## License
[MIT](https://choosealicense.com/licenses/mit/)