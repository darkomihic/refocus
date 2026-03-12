export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-emerald-100 text-xs bg-[#06402B]">
      &copy; {new Date().getFullYear()} Napravio{" "}
      <a
        href="https://www.linkedin.com/in/darko-mihic/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-300 hover:text-emerald-400 underline transition-colors"
      >
        Darko Mihić
      </a>
    </footer>

  );
}
