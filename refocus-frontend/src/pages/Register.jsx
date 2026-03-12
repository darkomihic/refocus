import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/TextLogoNoBG.png";

export default function Register() {
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

      {/* Register Card */}
      <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10">
        <h1 className="text-[#06402B] text-2xl md:text-3xl font-bold text-center mb-8">
          Registruj se
        </h1>

        {/* Full Name Field */}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Ime i prezime"
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

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

        {/* Phone Field */}
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <input
              type="tel"
              placeholder="Broj telefona"
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
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

        {/* Confirm Password Field */}
        <div className="mb-8">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Potvrdi lozinku"
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6">
          Registruj se
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-[#06402B]/20" />
          <span className="text-[#06402B]/50 text-sm font-medium">ili</span>
          <div className="flex-1 border-t border-[#06402B]/20" />
        </div>

        {/* Google Register */}
        <button className="w-full bg-white/70 hover:bg-white transition-colors text-[#06402B] text-base font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Nastavi sa Google
        </button>

        {/* Login Link */}
        <p className="text-center text-[#06402B]/60 text-sm">
          Već imaš nalog?{" "}
          <Link
            to="/login"
            className="text-[#06402B] font-bold hover:underline"
          >
            Prijavi se
          </Link>
        </p>
      </div>
    </div>
  );
}
