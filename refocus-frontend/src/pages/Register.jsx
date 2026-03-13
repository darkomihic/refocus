import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/TextLogoNoBG.png";

export default function Register() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) return setError("Lozinke se ne poklapaju");
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, useremail, userphone, userpassword: password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Greška pri registraciji");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

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
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10"
      >
        <h1 className="text-[#06402B] text-2xl md:text-3xl font-bold text-center mb-8">
          Registruj se
        </h1>

        {/* Username Field */}
        <div className="mb-4">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center shrink-0">
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
              placeholder="Korisničko ime"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center shrink-0">
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
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center shrink-0">
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
              value={userphone}
              onChange={(e) => setUserphone(e.target.value)}
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center shrink-0">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-8">
          <div className="flex items-center gap-4 bg-white/60 rounded-2xl px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#06402B] flex items-center justify-center shrink-0">
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
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6"
        >
          Registruj se
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
      </form>

      <button
        onClick={() => navigate("/")}
        className="w-48 mt-4 bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6"
      >
        Vrati se nazad
      </button>
    </div>

    
  );
}
