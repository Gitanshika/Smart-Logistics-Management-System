import { useState } from "react";
import api from "../../services/api";

function TrackShipment() {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);

  const handleTrack = async () => {
    try {
      const res = await api.get(`/shipments/track/${trackingId}`);
      setShipment(res.data.shipment);
    } catch (err) {
      alert(err.response?.data?.message || "Shipment not found");
      setShipment(null);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Track Shipment</h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">

        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="border w-full p-3 rounded mb-4"
        />

        <button
          onClick={handleTrack}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Track
        </button>

        {shipment && (
          <div className="mt-6 space-y-2">

            <p><strong>Tracking ID:</strong> {shipment.trackingId}</p>

            <p><strong>Receiver:</strong> {shipment.receiverName}</p>

            <p><strong>Delivery:</strong> {shipment.deliveryAddress}</p>

            <p><strong>Status:</strong> {shipment.status}</p>

            <p><strong>Weight:</strong> {shipment.packageWeight} kg</p>

          </div>
        )}

      </div>
    </div>
  );
}

export default TrackShipment;