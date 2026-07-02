import { useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
function CreateShipment() {
  const [formData, setFormData] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    receiverName: "",
    receiverPhone: "",
    packageWeight: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/shipments", formData);

     toast.success("Shipment booked successfully");

      console.log(res.data);

      setFormData({
        pickupAddress: "",
        deliveryAddress: "",
        receiverName: "",
        receiverPhone: "",
        packageWeight: "",
      });
    } catch (err) {
     toast.error(err.response?.data?.message || "Failed to create shipment"); 
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Create Shipment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded space-y-4 max-w-xl"
      >
        <input
          name="pickupAddress"
          placeholder="Pickup Address"
          value={formData.pickupAddress}
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          name="deliveryAddress"
          placeholder="Delivery Address"
          value={formData.deliveryAddress}
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          name="receiverName"
          placeholder="Receiver Name"
          value={formData.receiverName}
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          name="receiverPhone"
          placeholder="Receiver Phone"
          value={formData.receiverPhone}
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <input
          type="number"
          name="packageWeight"
          placeholder="Package Weight (kg)"
          value={formData.packageWeight}
          onChange={handleChange}
          className="border w-full p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
}

export default CreateShipment;