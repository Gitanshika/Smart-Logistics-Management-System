import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  LayoutDashboard,
  Package,
  Truck,
  MapPinned,
} from "lucide-react";

function CustomerLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        title="Smart Logistics"
        logout={logout}
        links={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
          },
          {
            name: "Create Shipment",
            path: "/dashboard/create",
            icon: Package,
          },
          {
            name: "My Shipments",
            path: "/dashboard/my",
            icon: Truck,
          },
          {
            name: "Track Shipment",
            path: "/dashboard/track",
            icon: MapPinned,
          },
        ]}
      />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default CustomerLayout;