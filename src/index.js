import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import About from "./components/pages/About";
import Shop from "./components/shop/Shop";
import 'materialize-css/dist/css/materialize.min.css'
import Login from "./components/pages/Login";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop" element={<Login/>} />
      </Routes>

  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
