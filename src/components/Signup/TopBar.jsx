import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { QrCode } from "lucide-react";

export default function TopNavbar() {
  const [dark, setDark] = useState(false);

  // 🌙 Dark mode handling
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        h-14 bg-white dark:bg-gray-950
        border-b border-gray-200/70 dark:border-gray-800
      "
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          <div className="relative w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
            {/* purple glow */}
            <div className="absolute inset-0 bg-purple-500/40 blur-lg rounded-lg -z-10" />
            <QrCode size={18} />
          </div>
          Quvouch
        </div>

        {/* THEME TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="
            p-2 rounded-full
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition
          "
          aria-label="Toggle theme"
        >
          {dark ? (
            <MdOutlineLightMode
              size={22}
              className="text-yellow-400"
            />
          ) : (
            <MdOutlineDarkMode
              size={22}
              className="text-gray-700 dark:text-gray-300"
            />
          )}
        </button>
      </div>
    </header>
  );
}
