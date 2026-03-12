import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/TextLogoNoBG.png";

export default function Login() {
  return (
    <div className="min-h-dvh bg-white flex flex-col items-center px-4 py-8 md:py-16">
      {/* Logo */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center mb-10 md:mb-14">
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-20 md:h-28 object-contain"
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10">
        <h1 className="text-[#06402B] text-2xl md:text-3xl font-bold text-center mb-8">
          Prijavi se
        </h1>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
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
            <input
              type="email"
              placeholder="Email adresa"
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Lozinka"
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>


        {/* Login Button */}
        <button className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6">
          Prijavi se
        </button>
        {/* Register Link */}
        <p className="text-center text-[#06402B]/60 text-sm">
          Nemaš nalog?{" "}
          <Link
            to="/register"
            className="text-[#06402B] font-bold hover:underline"
          >
            Registruj se
          </Link>
        </p>
      </div>
    </div>
  );
}
