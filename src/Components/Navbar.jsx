const Navbar = ({view_create}) => {
    const a = () => {
        view_create()
    }
    return ( 
        <nav className="navbar">
            <h1>Blog List</h1>
            <div className="links">
                {<button onClick={a}>Add post</button>} 
            </div>
        </nav>
     );
}
 
export default Navbar;