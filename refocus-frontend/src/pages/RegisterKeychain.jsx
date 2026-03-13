import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QrScanner from "../components/QrScanner";
import { useAuth } from "../context/AuthContext";

export default function RegisterKeychain() {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useAuth();

  const [step, setStep] = useState("scanning"); // "scanning" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleScanSuccess = async (qrCode) => {
    try {
      const res = await fetch("http://localhost:3000/keychains/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ qrCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message || "Greška pri registraciji privezka.");
        setStep("error");
      } else {
        setStep("success");
      }
    } catch {
      setErrorMessage("Nije moguće povezati se sa serverom.");
      setStep("error");
    }
  };

  return (
    <div className="min-h-dvh bg-white flex flex-col items-center px-4 py-8 md:py-16">
      {/* Login required popup */}
      {!isLoggedIn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl px-8 py-10 max-w-sm w-full text-center shadow-xl">
            <div className="w-14 h-14 rounded-full bg-[#d1fae5] flex items-center justify-center mx-auto mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#06402B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-[#06402B] text-xl font-bold mb-3">
              Potrebna prijava
            </h2>
            <p className="text-[#06402B]/70 text-sm mb-8">
              Morate biti prijavljeni da biste registrovali privezak.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-base font-bold py-3 rounded-2xl mb-3"
            >
              Prijavi se
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full border-2 border-[#06402B] text-[#06402B] hover:bg-[#d1fae5] transition-colors text-base font-bold py-3 rounded-2xl"
            >
              Vrati se nazad
            </button>
          </div>
        </div>
      )}

      {/* Logo */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center mb-8 md:mb-12">
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-20 md:h-28 object-contain"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10">
        {step === "scanning" && (
          <>
            <h2 className="text-[#14532d] text-xl md:text-2xl font-bold text-center mb-6">
              Skeniraj QR kod privezka
            </h2>
            <QrScanner
              onScanSuccess={handleScanSuccess}
              onScanError={(err) => console.error("Scan error:", err)}
            />
          </>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#06402B] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-[#06402B] text-2xl font-bold mb-3">
              Privezak registrovan!
            </h2>
            <p className="text-[#06402B]/70 text-base">
              Uspešno ste registrovali privezak na vaš nalog.
            </p>
          </div>
        )}

        {step === "error" && (
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-red-600 text-2xl font-bold mb-3">Greška</h2>
            <p className="text-red-500 text-base mb-6">{errorMessage}</p>
            <button
              onClick={() => setStep("scanning")}
              className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-base font-bold py-3 rounded-2xl"
            >
              Pokušaj ponovo
            </button>
          </div>
        )}
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
