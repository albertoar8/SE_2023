import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./Routes/routes";
import Login from '../src/Components/Login/Login.js';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <BrowserRouter>
        <Login setToken={setToken} />
      </BrowserRouter>
    )
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
