
# Wattendance
![image](https://github.com/jenniferli8263/wattendance/assets/75101197/4ddd1465-a5cd-4a0e-b7aa-9a22ca6ada5f)

Wattendance is a full-stack web application that uses facial recognition to automatically record/track attendance for the University of Waterloo's Software Engineering 2028 class.

# Technologies
Frontend: React.js, Material UI\
Backend: Node.js, MySQL, AWS\
Other: Raspberry Pi, Python, OpenCV\
\
The facial recognition model was trained with OpenCV on the Raspberry Pi, and upon recognizing a student, it will send attendance data via an API request to our website, which will then update the user's profile in real-time.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
