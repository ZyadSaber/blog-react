import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add post</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;