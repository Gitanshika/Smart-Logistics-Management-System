import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Truck, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../services/api";
function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successful");
      if (res.data.user.role === "customer") {
        navigate("/dashboard");
      } else if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/driver");
      }
    } catch (err) {
    toast.error(err.response?.data?.message || "Login Failed");  
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 text-white items-center justify-center p-12">

        <div>

          <div className="flex items-center gap-4 mb-8">

            <div className="bg-white text-slate-900 p-4 rounded-xl">
              <Truck size={40} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Smart Logistics
              </h1>

              <p className="text-slate-300">
                Shipment Management System
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold leading-relaxed">
            Delivering smarter.
            <br />
            Managing faster.
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Manage shipments, assign drivers,
            track deliveries and monitor logistics
            from one dashboard.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center p-8">

        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10"
        >

          <h2 className="text-3xl font-bold text-center">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-center mt-2 mb-8">
            Login to continue
          </p>

          <div className="relative mb-5">

            <Mail
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />

          </div>

          <div className="relative mb-6">

            <Lock
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />

          </div>

          <button
            className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-black transition font-semibold"
          >
            Login
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-slate-900"
            >
              Register
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;