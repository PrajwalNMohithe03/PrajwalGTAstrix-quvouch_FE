import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("role");
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            🛠 Admin Dashboard
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card title="Total Users" value="25,438" />
          <Card title="Active Clients" value="8,320" />
          <Card title="Sales Reps" value="120" />
          <Card title="System Status" value="✅ Healthy" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <h2 className="mt-2 text-xl font-bold text-purple-600">{value}</h2>
    </div>
  );
}
