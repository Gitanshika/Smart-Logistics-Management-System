import { useEffect, useState } from "react";
import api from "../../services/api";
import StatusBadge from "../../components/StatusBadge";
function MyShipments() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const res = await api.get("/shipments/my");
      setShipments(res.data.shipments);
    } catch (err) {
      alert("Failed to fetch shipments");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Shipments</h1>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3">Tracking ID</th>
              <th className="p-3">Receiver</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment._id} className="border-b text-center">
                <td className="p-3">{shipment.trackingId}</td>
                <td className="p-3">{shipment.receiverName}</td>
                <td className="p-3">{shipment.deliveryAddress}</td>
<td className="p-3">
  <StatusBadge status={shipment.status} />
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyShipments;