import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Component/Navbar/Navbar'
import 'tw-elements';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// render is method of react-dom to render the react elements