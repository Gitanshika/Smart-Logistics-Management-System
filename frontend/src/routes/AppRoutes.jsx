import { Routes, Route } from "react-router-dom";
import AddDriver from "../pages/admin/AddDriver";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";
// Customer
import CustomerLayout from "../layouts/CustomerLayout";
import Dashboard from "../pages/customer/Dashboard";
import CreateShipment from "../pages/customer/CreateShipment";
import MyShipments from "../pages/customer/MyShipments";
import TrackShipment from "../pages/customer/TrackShipment";

// Admin
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import AllShipments from "../pages/admin/AllShipments";

// Driver
import DriverLayout from "../layouts/DriverLayout";
import DriverDashboard from "../pages/driver/DriverDashboard";
import AssignedShipments from "../pages/driver/AssignedShipments";

function AppRoutes() {
  return (
    <Routes>

      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer */}
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute allowedRole="customer">
      <CustomerLayout />
    </ProtectedRoute>
  }
>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<CreateShipment />} />
        <Route path="my" element={<MyShipments />} />
        <Route path="track" element={<TrackShipment />} />
      </Route>

      {/* Admin */}
      <Route
  path="/admin"
  element={
    <ProtectedRoute allowedRole="admin">
      <AdminLayout />
    </ProtectedRoute>
  }
>
        <Route index element={<AdminDashboard />} />
        <Route path="shipments" element={<AllShipments />} />
        <Route path="add-driver" element={<AddDriver />} />
      </Route>

      {/* Driver */}
    <Route
  path="/driver"
  element={
    <ProtectedRoute allowedRole="driver">
      <DriverLayout />
    </ProtectedRoute>
  }
>  
        <Route index element={<DriverDashboard />} />
        <Route path="assigned" element={<AssignedShipments />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;