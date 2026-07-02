import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

function Sidebar({ title, links, logout }) {
  return (
    <aside className="w-64 bg-slate-900 text-white shadow-lg">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          {title}
        </h1>

      </div>

      <nav className="p-4 flex flex-col gap-2">

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </Link>
        ))}

        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg mt-6 text-red-400 hover:bg-slate-800 transition"
        >
          <LogOut size={20} />
          Logout
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;