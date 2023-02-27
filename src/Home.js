import { useEffect, useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    let blogTitle = 'All Blogs!';
    const [blogs, setblogs] = useState(null);    
    const [isPending, setIsPending] = useState(true);  

        
       
        // Fetching blogs from Json database using useEffect()
        useEffect(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setblogs(data);
                    setIsPending(false);
                })   
        }, [])


    return (

        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title={blogTitle}/> } 
        </div>

    );
}

export default Home;