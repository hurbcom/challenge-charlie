# Challenge Charlie

A microsite for displaying the current temperature and the forecast for the next two days of the disired location.

![image](https://user-images.githubusercontent.com/21958049/112880640-12887800-90a1-11eb-8cd2-560d3f21445c.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Starts the api proxy on http://localhost:3005, then runs client.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-client`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn start-server`
Runs the api proxy on http://localhost:3005

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To build Docker image
### Development
`docker build Dockerfile.dev -t [your_image_name]:[your_tag] .`

### Production
`docker build Dockerfile.prod -t [your_image_name]:[your_tag] .`

Nginx is exposed on port 80
