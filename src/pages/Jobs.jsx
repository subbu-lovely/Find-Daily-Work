import JobCard from "../components/JobCard";

function Jobs() {

  const jobs = [
    { title: "House Painting", location: "Nellore", wage: 800, workers: 2 },
    { title: "Electric Repair", location: "Hyderabad", wage: 900, workers: 1 },
    { title: "Plumbing Work", location: "Chennai", wage: 700, workers: 1 },
  ];

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}

      </div>

    </div>
  );
}

export default Jobs;