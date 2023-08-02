import "./App.css";
import { AppRoutes } from "./Routes/routes";
import NavigationTab from "./Components/NavigationTab";


function App() {
  
  return (
    <div className="App">
      <NavigationTab />
      <AppRoutes />
    </div>
  );
}

export default App;
