import { useEffect, useState } from "react";

export default function TopNavbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="h-14 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
            ⬛
          </div>
          Quvouch
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
