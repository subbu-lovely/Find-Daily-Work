function Categories() {

  const skills = [
    "Mason",
    "Plumber",
    "Electrician",
    "Painter",
    "Carpenter",
    "Labour"
  ];

  return (
    <div className="py-16 px-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Worker Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg cursor-pointer"
          >
            👷 {skill}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Categories;