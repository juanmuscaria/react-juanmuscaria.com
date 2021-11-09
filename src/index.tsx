import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const Main = React.lazy(() => import("./pages/Main"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
ReactDOM.render(
  <React.StrictMode>
      <React.Suspense fallback={<div/>}>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                      <Main/>
                  </Route>
                  <Route path="/">
                      <NotFound/>
                  </Route>
              </Switch>
          </BrowserRouter>
      </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
