# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: To run locally, an API key will be required**

## Assorted Notes

Due to the size it wasn't necessary, but normally I'd split it into Feature folders, containing all necessary item for a specific feature plus a Common folder for some atomic components

Some components could be turned into a more versatile version (`FilmList`), which would be more reusable.

Every feature branch would be strictly limited to this feature, rather than ninja-commits with other items, as noticed during work :)

For a bigger app all of the decisions,naming conventions, solutions, tools, approaches would have to be discussed and agreed on

Given more time it'd be helpful to add line heights to match modular font scale and a proper resuable grid layout, either via css classes or maybe layout components

Some naming could improved, such a removal of redundant parts - `--extrabold-weight` when naming a font weight variable

One feature that would be lovely is to display a film poster on the list page. The API used does not expose this property in the endpoint returning films by rating, but it does when requesting the details of a specific film. This list has only 10 items, so it would be possible to query for the list and then, using the ids, collect requests for details in a `Promise.all()`. The result could be put in a property in the store and that would eliminate the need for another request when navigating to the details page. However, this solution wouldn't scale, in my opinion. This case would be a prime candidate for a discussion with backend developers to adjust the first endpoint. Alternatively, one could use GrapQL for a more granular request from the second endpoint.  

I quite enjoyed playing around with Zustand - it feels much nicer than bigger, more boilerplate heavy alternatives as well as providing some skeleton setup for theming with just css properties


Tests for components would at least include a happy path scenario, malformed data scenario and no data scenario. Additionally, a test would be needed for any internal logic and user interactions. For the store, requests would have to be ideally mocked and checked for error handling.

I'm quite chuffed with this `filmDetails as Pick<typeof filmDetails, keyof FilmItemDetails>` line, I think it's quite clever, even I say so myself :)
