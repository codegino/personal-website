import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'normalize.css';
import './personal_website/assets/styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './store/reducers/index';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
