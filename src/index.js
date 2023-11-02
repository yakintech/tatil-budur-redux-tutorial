import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { counterReducer } from './store/reducers/counter.reducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { todoReducer } from './store/reducers/todo.reducer';
import combine from './store/reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';



const root = ReactDOM.createRoot(document.getElementById('root'));

const Store = createStore(combine, applyMiddleware(thunk, logger))

root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>



);

