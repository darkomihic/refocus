import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NavbarProvider, useNavbar } from "./context/NavbarContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";
import ScanResult from "./pages/ScanResult";
import RegisterKeychain from "./pages/RegisterKeychain";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRoutes() {
  const { visible } = useNavbar();
  return (
    <>
      {visible && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/scan-result/:uuid" element={<ScanResult />} />
        <Route path="/register-keychain" element={<RegisterKeychain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NavbarProvider>
    </AuthProvider>
  );
}
