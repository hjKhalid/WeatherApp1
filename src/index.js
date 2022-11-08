import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import WeatherComponent from './mycomponent/WeatherInfoComponent';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const container = document.getElementById('app');
const root = createRoot(WeatherComponent); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);