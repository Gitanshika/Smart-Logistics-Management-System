function DashboardCard({ title, value, icon: Icon, color = "blue" }) {
  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    yellow: "bg-yellow-500",
    purple: "bg-purple-600",
    red: "bg-red-600",
    indigo: "bg-indigo-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`h-14 w-14 rounded-xl flex items-center justify-center text-white ${colors[color]}`}
      >
        {Icon && <Icon size={28} />}
      </div>
    </div>
  );
}

export default DashboardCard;