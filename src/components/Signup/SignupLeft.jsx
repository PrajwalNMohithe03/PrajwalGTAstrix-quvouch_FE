import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: "sales",
    label: "Sales Rep",
    placeholder: "salesrep@company.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
        <path d="M9 7V5a3 3 0 016 0v2" />
      </svg>
    ),
  },
  {
    id: "client",
    label: "Client",
    placeholder: "client@company.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    id: "admin",
    label: "Admin",
    placeholder: "admin@company.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
      </svg>
    ),
  },
];

export default function SignupLeft() {
  const navigate = useNavigate();

  // 🔄 restore role if exists
  const [role, setRole] = useState(
    localStorage.getItem("role") || "sales"
  );

  const [dark, setDark] = useState(false);

  // 🌙 Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // 🔄 remember role
  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  // 🔐 AUTH + ROUTE HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    // mark user authenticated
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("role", role);

    if (role === "sales") navigate("/dashboard/sales");
    if (role === "client") navigate("/dashboard/client");
    if (role === "admin") navigate("/dashboard/admin");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* 🔝 TOP NAVBAR */}
      <header className="h-16 w-full border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              ⬛
            </div>
            <span className="text-lg">
              Qu<span className="text-purple-600">vouch</span>
            </span>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="flex items-center justify-center py-16">
        <div className="relative w-[420px] rounded-2xl bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-purple-400/30 blur-[140px] -z-10" />

          <div className="px-8 py-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-purple-100 dark:bg-purple-900/40
                            text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
              ✨ Welcome Back
            </div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign In
            </h1>

            <p className="mt-1 text-purple-600 font-medium">to Quvouch</p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Access your dashboard
            </p>

            {/* ROLE SWITCH */}
            <div className="mt-8 grid grid-cols-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`h-14 flex flex-col items-center justify-center gap-1 rounded-lg text-xs font-medium transition
                    ${
                      role === r.id
                        ? "bg-purple-600 text-white shadow-md"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  {r.icon}
                  {r.label}
                </button>
              ))}
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder={roles.find(r => r.id === role).placeholder}
                  className="mt-2 w-full h-12 px-4 rounded-lg
                             bg-gray-50 dark:bg-gray-800
                             border border-gray-200 dark:border-gray-700
                             focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <label className="text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <span className="text-purple-600 cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full h-12 px-4 rounded-lg
                             bg-gray-50 dark:bg-gray-800
                             border border-gray-200 dark:border-gray-700
                             focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-lg
                           bg-gradient-to-r from-purple-600 to-indigo-600
                           text-white font-medium shadow-lg
                           hover:opacity-90 transition"
              >
                Sign in as {roles.find(r => r.id === role).label} →
              </button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="h-12 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Google
              </button>
              <button className="h-12 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                Apple
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <span className="text-purple-600 cursor-pointer">
                Contact sales
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
