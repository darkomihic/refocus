import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useNavbar } from "../context/NavbarContext";

export default function ScanResult() {
  const { uuid } = useParams();
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setVisible } = useNavbar();

  // Hide navbar until the result card is ready
  useEffect(() => {
    setVisible(false);
    return () => setVisible(true);
  }, [setVisible]);

  useEffect(() => {
    if (owner) setVisible(true);
  }, [owner, setVisible]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/keychains/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qrCode: uuid }),
    })
      .then((res) => {
        if (res.status===404) throw new Error("QR kod nije pronađen u bazi");
        if (res.status===403) throw new Error("QR kod nije registrovan");
        return res.json();
      })
      .then((data) => setOwner(data))
      .catch((err) => setError(err.message));
  }, [uuid]);

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 font-semibold">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="w-48 mt-4 bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6"
        >
          Vrati se nazad
      </button>
      </div>


    );

  if (!owner)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#06402B]">Učitavanje...</p>
      </div>
    );

  return (
    <div className="min-h-dvh bg-white flex flex-col items-center px-4 py-8 md:py-16">
      {/* Logo */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center mb-8 md:mb-12">
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-20 md:h-28 object-contain"
        />
      </div>

      {/* Result Card */}
      <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10">
        {/* Success Icon + Message */}
        <div className="flex flex-col items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-12 md:h-12 text-[#06402B] mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <p className="text-[#06402B] text-lg md:text-xl font-semibold italic text-center">
            Uspešno
            <br />
            pronađen vlasnik
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#06402B]/20 mb-6" />

        {/* Owner Name */}
        <div className="mb-6">
          <p className="text-[#06402B]/70 text-sm font-semibold mb-1 tracking-wide uppercase">
            Ime:
          </p>
          <p className="text-[#06402B] text-lg md:text-xl font-bold">
            {owner.username}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#06402B]/20 mb-6" />

        {/* Contact Label */}
        <p className="text-[#06402B]/70 text-sm font-semibold mb-4 tracking-wide uppercase">
          Kontakt:
        </p>
        <p className="text-[#06402B] text-base md:text-lg font-bold mb-5">
          {owner.username}
        </p>

        {/* Phone */}
        <a
          href={`tel:${owner.userphone}`}
          className="flex items-center gap-4 bg-white/50 hover:bg-white/70 transition-colors rounded-2xl px-5 py-4 mb-3"
        >
          <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <span className="text-[#06402B] text-base md:text-lg font-medium">
            {owner.userphone}
          </span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${owner.useremail}`}
          className="flex items-center gap-4 bg-white/50 hover:bg-white/70 transition-colors rounded-2xl px-5 py-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-[#06402B] text-base md:text-lg font-medium">
            {owner.useremail}
          </span>
        </a>
      </div>
    </div>
  );
}
