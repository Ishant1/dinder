import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth/AuthHistory"

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
    
      <App />
  
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
