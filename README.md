In order for this app to work locally, you need to have your own API key.
I got mine from Hugging Face
, and you can get yours there too — it’s free.

Once you have the key, just create a .env file in the root of the project and save it using the same variable name I used in the code:
REACT_APP_API_KEY=your_api_key_here //dont change the name
Install project dependencies
npm install

Start the CORS proxy
The project uses a local proxy to bypass CORS. Start the proxy server:
node cors-server.js
Keep this terminal open while using the app.

Start the React app
npm start


That’s it — after those steps, the app should run without problems. 🚀


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

