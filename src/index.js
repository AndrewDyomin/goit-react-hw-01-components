import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/profiles/profile/Profile';
import { Statistics } from 'components/stat/statistic/Statistics';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Profile />
    <Statistics />
  </React.StrictMode>
);
