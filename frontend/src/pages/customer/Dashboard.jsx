import { useEffect, useState } from "react";
import api from "../../services/api";

import DashboardCard from "../../components/DashboardCard";

import {
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";
console.log("Dashboard Loaded");
function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    total: 0,
    delivered: 0,
    inTransit: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  

  const loadDashboard = async () => {
  const res = await api.get("/shipments/dashboard");
  console.log(res.data);
  setStats(res.data);
};

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {user.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCard
          title="My Shipments"
          value={stats.total}
          icon={Package}
          color="blue"
        />

        <DashboardCard
          title="In Transit"
          value={stats.inTransit}
          icon={Truck}
          color="yellow"
        />

        <DashboardCard
          title="Delivered"
          value={stats.delivered}
          icon={CheckCircle}
          color="green"
        />

      </div>

    </div>
  );
}

export default Dashboard;