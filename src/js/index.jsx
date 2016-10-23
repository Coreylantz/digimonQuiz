import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from "./app.jsx";
require("../css/main.scss");

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>, 
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const NextApp = require('./app.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      document.getElementById('root')
    );
  });
}
