import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import './styles/base.css';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.title = 'Dailės prekių parduotuvė'

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout/>
    </Provider>
  </React.StrictMode>
);