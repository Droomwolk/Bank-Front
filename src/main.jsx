/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>,
    </PersistGate>
  </Provider>,
  // </QueryClientProvider>,
);
