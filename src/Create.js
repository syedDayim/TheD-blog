import { useState } from "react"
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page to refresh
        const blog = { title, body, author}

        setIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            history.push('/')
        })
    }




    return ( 
        <div className="create">
            <center>
            <h2>Add a Blog!</h2>
            </center>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => {setTitle(e.target.value)}  }

                />

                <label>Body</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e)=>{setBody(e.target.value)} }
                >
                </textarea>

                <label>Author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={ (e)=>{setAuthor(e.target.value)}}
                />

                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding...</button>}
            </form>
{/* <p>{title} </p>
<p>{body} </p>
<p>{author} </p> */}


        </div>

     );
}
 
export default Create;


