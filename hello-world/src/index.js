// Dependencies
import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';

// Routes
//Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as  Route } from 'react-router-dom'


render(
  <Route>
  <AppRoutes />
</Route>,
  document.getElementById('root')
);
registerServiceWorker();
