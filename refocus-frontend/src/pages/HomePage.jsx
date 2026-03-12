import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/TextLogoNoBG.png"; // adjust path to your assets

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white flex flex-col items-center px-4 py-8 md:py-16">
      {/* Logo */}
      <div className="w-full max-w-md md:max-w-lg flex justify-center mb-10 md:mb-14">
        {/* Replace src with your actual logo import */}
        <img
          src="/assets/TextLogoNoBG.png"
          alt="RefocusCo"
          className="h-20 md:h-28 object-contain"
        />
      </div>

      {/* Action Cards Container */}
      <div className="w-full max-w-md md:max-w-lg flex flex-col gap-5 md:gap-6">
        {/* Card: Pronašao sam privezak */}
        <Link
          to="/scan"
          className="block rounded-3xl bg-[#d1fae5] hover:bg-[#bbf7d0] transition-colors duration-200 px-6 py-8 md:py-10 text-center"
        >
          {/* Search Icon */}
          <div className="flex justify-center mb-4">
            <img src="/assets/Magnifier.png"></img>
          </div>
          <h2 className="text-[#06402B] text-xl md:text-2xl font-bold leading-snug">
            Pronašao sam
            <br />
            privezak
          </h2>
        </Link>

        {/* Card: Registruj privezak */}
        <Link
          to="/register-keychain"
          className="block rounded-3xl bg-[#d1fae5] hover:bg-[#bbf7d0] transition-colors duration-200 px-6 py-8 md:py-10 text-center"
        >
          {/* Keychain Icon */}
          <div className="flex justify-center mb-4">
            <img src="/assets/KeyChain.png"></img>
          </div>
          <h2 className="text-[#06402B] text-xl md:text-2xl font-bold leading-snug">
            Registruj
            <br />
            privezak
          </h2>
        </Link>
      </div>

      {/* Desktop: extra spacing at bottom */}
      <div className="hidden md:block mt-16" />
    </div>
  );
}
