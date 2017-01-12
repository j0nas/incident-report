import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { install as installServiceWorker } from 'offline-plugin/runtime';
import rootReducer from '../reducers';
import toggleCheckboxReducer from '../reducers/toggleCheckboxReducer';
import Report from '../views/Report';
import './style.scss';

const reduxMiddleware = applyMiddleware(thunk, reduxPackMiddleware);

const enhancer =
    process.env.NODE_ENV === 'development' ?
        compose(reduxMiddleware, ...(window.devToolsExtension ? [window.devToolsExtension()] : [])) :
        reduxMiddleware;

const combinedReducers = combineReducers({
  rootReducer,
  toggleCheckboxReducer,
});

const store = createStore(combinedReducers, enhancer);

const rootElement = document.getElementById('root');
const reactRoot = (
  <Provider store={store}>
    <AppContainer>
      <Report />
    </AppContainer>
  </Provider>
);

render(reactRoot, rootElement);
installServiceWorker();

if (module.hot) {
  module.hot.accept('../views/Report', () =>
        render(Object.assign({}, reactRoot), rootElement));
}
