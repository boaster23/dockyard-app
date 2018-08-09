import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//ReactDOM.render(<App />, document.getElementById('web-content-wrapper'));
import postReducer from './reducers/postReducer';
const store = createStore(postReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('web-content-wrapper'));
