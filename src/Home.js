import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    let blogTitle = 'All Blogs!';
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  
    return (

        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={ blogs } title={blogTitle}/> } 
        </div>

    );
}

export default Home;