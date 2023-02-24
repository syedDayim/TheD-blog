import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    let blogTitle = 'All Blogs!';
    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario' , id: 1 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi' , id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi' , id: 3 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario' , id: 4 }
        
        ]);      

        const handleDelete = (id ) => {
            let newBlogs = blogs.filter(blog => blog.id !== id)
            setblogs(newBlogs)
        }



    return (

        <div className="home">
            <BlogList blogs={ blogs } title={blogTitle} handleDelete={handleDelete}/>
            <BlogList blogs={ blogs.filter((blog) => (blog.author === 'yoshi') ) } title="Yoshi's Blogs"/>
        </div>

    );
}

export default Home;