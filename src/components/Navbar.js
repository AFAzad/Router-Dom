import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main-nav">
      <ul>
        <li>
        <Link to="/">Home</Link>
          
        </li>
        <li>
        <Link to="/About">About</Link>
         
        </li>
         </ul>
    </div>
  );
}

export default Navbar;
