import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  LayoutDashboard,
  Package,
} from "lucide-react";

function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        title="Admin Panel"
        logout={logout}
        links={[
          {
            name: "Dashboard",
            path: "/admin",
            icon: LayoutDashboard,
          },
          {
            name: "All Shipments",
            path: "/admin/shipments",
            icon: Package,
          },
        ]}
      />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;