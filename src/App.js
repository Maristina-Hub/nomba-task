import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import LandingPage from "./components/landingPage/LandingPage.jsx";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/nav" element={<NavBar />} />
          <Route exact path="/footer" element={<Footer />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
