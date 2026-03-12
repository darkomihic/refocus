import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScanResult from "./pages/ScanResult";
import RegisterKeychain from "./pages/RegisterKeychain";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function MobileOnly({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (!isMobile) {
    return (
      <div className="min-h-dvh bg-white flex flex-col items-center justify-center px-8 text-center">
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-16 object-contain mb-8"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">Mobile only for now</h1>
        <p className="text-gray-500 max-w-sm">
          This app is currently only available on mobile devices. Please open it on your phone.
        </p>
      </div>
    );
  }

  return children;
}

export default function App() {
  return (
    <MobileOnly>
    <Router>
      <div className="relative">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scan" element={<ScanResult />} />
        <Route path="/register-keychain" element={<RegisterKeychain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
    </MobileOnly>
  );
}
