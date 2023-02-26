import { useEffect, useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    let blogTitle = 'All Blogs!';
    const [blogs, setblogs] = useState(null);      

        const handleDelete = (id ) => {
            let newBlogs = blogs.filter(blog => blog.id !== id)
            setblogs(newBlogs)
        }
       
        // Fetching blogs from Json database using useEffect()
        useEffect(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setblogs(data);
                })   
        }, [])


    return (

        <div className="home">
            {blogs && <BlogList blogs={ blogs } title={blogTitle} handleDelete={handleDelete}/> } 
        </div>

    );
}

export default Home;