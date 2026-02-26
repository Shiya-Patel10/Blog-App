import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-Links">
        <Link to="/home">Home</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
};
export default Navbar;
