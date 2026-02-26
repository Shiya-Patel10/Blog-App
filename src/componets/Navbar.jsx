import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar"></div>
      <h2>My Blog</h2>
      <Link to="/home">Home</Link>
    </nav>
  );
};
export default Navbar;
