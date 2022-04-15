import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login';

// issue with semantic-ui-css - required setting "react-scripts" to version "4.0.3" in package.json
// originally at 5.0.0 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Renders the app component to the root element
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} >
//         <Route path="home" element={<Home />} />
//         <Route path="profile" element={<Profile />} />
//       </Route>
//       <Route path="login" element={<Login />} />
//     </Routes>
//     {/* <App /> */}
//   </BrowserRouter>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <BrowserRouter>   
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);