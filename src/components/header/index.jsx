import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="pt-6 mx-24">
      <Link to="/add" className="bg-indigo-300 rounded-lg p-2">
        Add Resume
      </Link>
    </nav>
  );
};

export default Header;
