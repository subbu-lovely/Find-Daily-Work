import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/Postjob";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import Bubbles from "./components/Bubbles";



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;