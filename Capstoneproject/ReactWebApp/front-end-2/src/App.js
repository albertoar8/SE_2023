import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./Routes/routes";

function App() {
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
