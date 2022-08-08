const Navbar = ({view_create}) => {
    const create = () => {
        view_create()
    }
    return ( 
        <nav className="navbar">
            <h1>Blog List</h1>
            <div className="links">
                {<button onClick={create}>Add post</button>} 
            </div>
        </nav>
     );
}
export default Navbar;