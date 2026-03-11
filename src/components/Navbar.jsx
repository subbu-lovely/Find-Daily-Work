import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-500 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">WorkDay</h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/post-job">Post Work</Link>
        <Link to="/login">Login</Link>

        <button className="bg-white text-black px-4 py-2 rounded">
          Exit
        </button>
      </div>

    </nav>
  );
}

export default Navbar;