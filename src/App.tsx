import "./App.css";
import Summer from "./components/Summer";
import Winter from "./components/Winter";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Winter" Component={Winter} />
        <Route path="/Summer" Component={Summer} />
        <Route path='/About' Component={About}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
