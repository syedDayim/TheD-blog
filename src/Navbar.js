const Navbar = () => {
    // const styles = {
    //     color : 'white',
    //     backgroundColor : '#D83B3B',
    //     borderRadius : '10px',
    // }
    return ( 
        <nav>
            <h1 className="nav-heading">TheD-blog</h1>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>


     );
}
 
export default Navbar;