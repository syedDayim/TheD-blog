import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <h1 className="nav-heading">TheD-blog</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>


     );
}
 
export default Navbar;