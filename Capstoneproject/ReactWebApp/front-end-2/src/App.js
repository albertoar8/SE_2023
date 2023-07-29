import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./Routes/routes";
import Login from '../src/Components/Login/Login.js';
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return (
  //     <BrowserRouter>
  //       <Login setToken={setToken} />
  //     </BrowserRouter>
  //   )
  // }
  // return (
  //   <div className="wrapper">
  //     <h1>Application</h1>
  //     <BrowserRouter>
  //       <AppRoutes/>
  //     </BrowserRouter>
  //   </div>
  // );
/*--------------------------------------------------*/
return (
  <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);
}

export default App;
