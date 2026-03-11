function Hero() {
  return (
    <div className="bg-gray-100 py-28 text-center">

      <h1 className="text-5xl font-bold text-gray-800">
        Find Daily Work Near You
      </h1>

      <p className="mt-4 text-gray-600">
        Connecting workers and employers instantly
      </p>

      <div className="mt-8 flex justify-center gap-4">

        <input
          type="text"
          placeholder="Search Job"
          className="border p-3 rounded w-56"
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-3 rounded w-56"
        />

        <button className="bg-red-500 text-white px-6 py-3 rounded">
          Search
        </button>

      </div>

    </div>
  );
}

export default Hero;