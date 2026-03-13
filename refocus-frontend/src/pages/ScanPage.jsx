import React from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "../components/QrScanner";
// import logo from "../assets/TextLogoNoBG.png";

export default function ScanPage() {
  const navigate = useNavigate();

  const handleScanSuccess = (uuid) => {
    // uuid = the string read from the QR code
    // navigate to scan result, passing the uuid so your logic can fetch owner data
    navigate(`/scan-result/${uuid}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8 md:py-16">
      {/* Logo */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center mb-8 md:mb-12">
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-20 md:h-28 object-contain"
        />
      </div>

      {/* Scanner Card */}
      <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10">
        <h2 className="text-[#14532d] text-xl md:text-2xl font-bold text-center mb-6">
          Skeniraj QR kod
        </h2>

        <QrScanner
          onScanSuccess={handleScanSuccess}
          onScanError={(err) => console.error("Scan error:", err)}
        />
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-48 mt-4 bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6"
      >
        Vrati se nazad
      </button>
    </div>
  );
}
