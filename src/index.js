import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './SignUp.js';
import Dashboard from './Dashboard.js';
import Discover from './Discover.js';
import Confirm from './Confirm.js';
import WorkplaceProfile from './WorkplaceProfile.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      {/* <React.StrictMode> */}
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="discover" element={<Discover />} />
      <Route path="confirm" element={<Confirm />} />
      <Route path="workplaceprofile" element={<WorkplaceProfile />} />
      {/* </React.StrictMode> */}
  </Routes>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
