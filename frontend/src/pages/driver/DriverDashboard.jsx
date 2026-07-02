import { useEffect, useState } from "react";
import api from "../../services/api";

import DashboardCard from "../../components/DashboardCard";

import {
  ClipboardList,
  PackageCheck,
  Truck,
  CheckCircle,
} from "lucide-react";

function DriverDashboard() {
  const [stats, setStats] = useState({
    assigned: 0,
    pickedUp: 0,
    inTransit: 0,
    delivered: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await api.get("/shipments/driver-dashboard");
    setStats(res.data);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Driver Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Assigned"
          value={stats.assigned}
          icon={ClipboardList}
          color="blue"
        />

        <DashboardCard
          title="Picked Up"
          value={stats.pickedUp}
          icon={PackageCheck}
          color="purple"
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

export default DriverDashboard;