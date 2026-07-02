import { useState } from "react";
import api from "../../services/api";

function AddDriver() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createDriver = async () => {
    try {
      const res = await api.post("/auth/create-driver", formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md bg-white shadow p-6 rounded">
      <h1 className="text-3xl font-bold mb-6">
        Add Driver
      </h1>

      <input
        type="text"
        name="name"
        placeholder="Driver Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Driver Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <button
        onClick={createDriver}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        Create Driver
      </button>
    </div>
  );
}

export default AddDriver;