import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  LayoutDashboard,
  Truck,
} from "lucide-react";

function DriverLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        title="Driver Panel"
        logout={logout}
        links={[
          {
            name: "Dashboard",
            path: "/driver",
            icon: LayoutDashboard,
          },
          {
            name: "Assigned Shipments",
            path: "/driver/assigned",
            icon: Truck,
          },
        ]}
      />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default DriverLayout;