import { useParams } from "react-router";

const BlogPreview = () => {
    const { id } = useParams();
    return ( 
        <div className="blog-preview">
            <h1> BlogID - { id } </h1>
        </div>

     );
}
 
export default BlogPreview;