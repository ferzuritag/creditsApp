import React from 'react';
import ReactDOM from 'react-dom';
import './firebase/firebase'
import './App.css';
import { MainRouter } from './router/MainRouter';
ReactDOM.render(
    <MainRouter  />,
  document.getElementById('root')
);
