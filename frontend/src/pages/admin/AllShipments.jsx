import { useEffect, useState } from "react";
import api from "../../services/api";
import StatusBadge from "../../components/StatusBadge";
import toast from "react-hot-toast";
function AllShipments() {
  const [shipments, setShipments] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState({});

  useEffect(() => {
    fetchShipments();
    fetchDrivers();
  }, []);

const fetchShipments = async () => {
  try {
    const res = await api.get("/shipments");
    setShipments(res.data.shipments);
  } catch (err) {
    toast.error("Failed to load shipments");
  }
};
const fetchDrivers = async () => {
  try {
    const res = await api.get("/auth/drivers");
    setDrivers(res.data.drivers);
  } catch (err) {
    toast.error("Failed to load drivers");
  }
};
  
  const assignDriver = async (shipmentId) => {
  if (!selectedDriver[shipmentId]) {
    toast.error("Please select a driver");
    return;
  }

  try {
    await api.put(`/shipments/${shipmentId}/assign-driver`, {
      driverId: selectedDriver[shipmentId],
    });

    toast.success("Driver assigned successfully");

    fetchShipments();
  } catch (err) {
    toast.error(err.response?.data?.message || "Failed to assign driver");
  }
};
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        All Shipments
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-black text-white">

          <tr>
            <th className="p-3">Tracking</th>
            <th className="p-3">Receiver</th>
            <th className="p-3">Destination</th>
            <th className="p-3">Status</th>
            <th className="p-3">Driver</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {shipments.map((shipment) => (

            <tr key={shipment._id} className="text-center border-b">

              <td>{shipment.trackingId}</td>

              <td>{shipment.receiverName}</td>

              <td>{shipment.deliveryAddress}</td>

            <td className="p-3">
  <StatusBadge status={shipment.status} />
</td>  

              <td>

                <select
                  className="border p-2"
                  onChange={(e) =>
                    setSelectedDriver({
                      ...selectedDriver,
                      [shipment._id]: e.target.value,
                    })
                  }
                >

                  <option>Select Driver</option>

                  {drivers.map((driver) => (

                    <option
                      key={driver._id}
                      value={driver._id}
                    >
                      {driver.name}
                    </option>

                  ))}

                </select>

              </td>

              <td>

                <button
                  onClick={() => assignDriver(shipment._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Assign
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default AllShipments;