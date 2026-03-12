import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 right-0 p-4 z-50" ref={menuRef}>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl bg-green-50 shadow-sm border border-gray-100"
        aria-label="Meni"
      >
        <span className={`block w-5 h-0.5 bg-[#06402B] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#06402B] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#06402B] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-4 top-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-w-40">
          <Link
            to="/login"
            className="block px-5 py-3.5 text-sm font-semibold text-[#06402B] hover:bg-[#d1fae5] transition-colors"
          >
            Prijavi se
          </Link>
          <div className="border-t border-gray-100" />
          <Link
            to="/register"
            className="block px-5 py-3.5 text-sm font-semibold text-[#06402B] hover:bg-[#d1fae5] transition-colors"
          >
            Registruj se
          </Link>
        </div>
      )}
    </nav>
  );
}
