import { useEffect, useState } from "react";
import api from "../../services/api";
import StatusBadge from "../../components/StatusBadge";
import toast from "react-hot-toast";
function AssignedShipments() {
  const [shipments, setShipments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const res = await api.get("/shipments/assigned");
      setShipments(res.data.shipments);
      
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const updateStatus = async (shipmentId) => {
    if (!selectedStatus[shipmentId]) {
      alert("Please select a status");
      return;
    }

    try {
      await api.put(`/shipments/${shipmentId}/status`, {
        status: selectedStatus[shipmentId],
      });
toast.success("Shipment status updated");
     
      fetchShipments();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Assigned Shipments
      </h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-3">Tracking ID</th>
            <th className="p-3">Receiver</th>
            <th className="p-3">Current Status</th>
            <th className="p-3">New Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment._id} className="border-b text-center">

              <td className="p-3">{shipment.trackingId}</td>

              <td className="p-3">{shipment.receiverName}</td>

              <td className="p-3">
  <StatusBadge status={shipment.status} />
</td>

              <td className="p-3">
                <select
                  className="border p-2 rounded"
                  value={selectedStatus[shipment._id] || ""}
                  onChange={(e) =>
                    setSelectedStatus({
                      ...selectedStatus,
                      [shipment._id]: e.target.value,
                    })
                  }
                >
                  <option value="">Select Status</option>
                  <option value="Picked Up">Picked Up</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>

              <td className="p-3">
                <button
                  onClick={() => updateStatus(shipment._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignedShipments;