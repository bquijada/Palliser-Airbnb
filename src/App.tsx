import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import { useState } from "react";
import { Tag } from "./hooks/useTags";
import Explore from "./components/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Explore/:season" Component={Explore} />
        <Route path="/About" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
