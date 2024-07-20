import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Puja from "./component/Puja";
import ComingSoon from "./component/ComingSoon";
import PujaHistory from "./component/PujaHistory";
import PujaDetailedView from "./component/PujaDetailedView";
import PujaCart from "./component/PujaCart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epuja" element={<Puja />} />
        <Route path="/epuja/history" element={<PujaHistory />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/epuja/:id" element={<PujaDetailedView />} />
        <Route path="/epuja/cart/:pujaId" element={<PujaCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
