import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import logo from "../assets/TextLogoNoBG.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, userpassword: password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Greška pri prijavi");
      login(data.token);
      navigate("/");
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

      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-lg rounded-3xl bg-[#d1fae5] px-6 py-8 md:px-10 md:py-10"
      >
        <h1 className="text-[#06402B] text-2xl md:text-3xl font-bold text-center mb-8">
          Prijavi se
        </h1>

        {/* Username Field */}
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
              placeholder="Korisničko ime"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 bg-transparent text-[#06402B] text-base md:text-lg font-medium placeholder-[#06402B]/40 outline-none"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#06402B] hover:bg-[#166534] transition-colors text-white text-lg font-bold py-4 rounded-2xl mb-6"
        >
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
