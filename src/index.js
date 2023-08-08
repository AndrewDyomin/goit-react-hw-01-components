import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/profiles/Profile';
import { Statistics } from 'components/stat/statistic/Statistics'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile />
    <Statistics />
  </React.StrictMode>
);
