function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",

    Assigned: "bg-indigo-100 text-indigo-700",

    "Picked Up": "bg-purple-100 text-purple-700",

    "In Transit": "bg-blue-100 text-blue-700",

    Delivered: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;