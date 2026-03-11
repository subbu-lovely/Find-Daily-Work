function JobCard({ title, location, wage, workers }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-600">📍 {location}</p>
      <p className="text-gray-600">👷 Workers: {workers}</p>

      <p className="text-green-600 font-bold mt-1">
        ₹{wage}/day
      </p>

      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;