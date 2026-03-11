function PostJob() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          Post a Job
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Job Title (Example: Mason Work)"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Daily Wage (₹)"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Number of Workers Needed"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Job Description"
            className="w-full border p-3 rounded-lg"
            rows="4"
          ></textarea>

          <button
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
          >
            Post Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default PostJob;