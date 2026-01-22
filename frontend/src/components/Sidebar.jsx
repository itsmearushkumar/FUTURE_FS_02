import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `block hover:text-white ${
      location.pathname === path ? "text-white font-semibold" : "text-gray-300"
    }`;

  return (
    <aside className="w-64 bg-zinc-900 text-white h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">🚀 Mini CRM</h1>

      <nav className="space-y-4">
        <Link to="/" className={linkClass("/")}>
          📊 Dashboard
        </Link>

        <Link to="/leads" className={linkClass("/leads")}>
          🧲 Leads
        </Link>

        <Link to="/analytics" className={linkClass("/analytics")}>
          📈 Analytics
        </Link>

        <Link to="/settings" className={linkClass("/settings")}>
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}
