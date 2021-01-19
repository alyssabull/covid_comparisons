import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from "react-router-dom";

const router = <BrowserRouter basename='/covid_comparisons'><App /></BrowserRouter>

ReactDOM.render(
 router,
  document.getElementById('root')
);