import { useEffect, useState } from "react";
import api from "../../services/api";

import DashboardCard from "../../components/DashboardCard";

import {
  Package,
  Truck,
  CheckCircle,
  Users,
} from "lucide-react";

function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    delivered: 0,
    drivers: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await api.get("/shipments/admin-dashboard");
    setStats(res.data);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Shipments"
          value={stats.total}
          icon={Package}
          color="blue"
        />

        <DashboardCard
          title="Drivers"
          value={stats.drivers}
          icon={Users}
          color="purple"
        />

        <DashboardCard
          title="Pending"
          value={stats.pending}
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