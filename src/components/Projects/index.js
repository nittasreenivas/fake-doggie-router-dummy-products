import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <h3> Projects </h3>
      <div>
        <ul className="project-list">
          <Link to="/projects/doggie">
            <li> Doggie </li>
          </Link>
          <Link to="/projects/fake">
            <li> Fake_Products </li>
          </Link>
          <Link to="/projects/dummy">
            <li> Dummy_Products </li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
