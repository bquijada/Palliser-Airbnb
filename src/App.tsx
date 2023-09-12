import "./App.css";
import Explore from "./components/Explore";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Explore" Component={Explore} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
