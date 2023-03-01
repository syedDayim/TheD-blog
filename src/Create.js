import { useState } from "react"
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    return ( 
        <div className="create">
            <center>
            <h2>Add a Blog!</h2>
            </center>

            <form>
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

                <button>Add Blog</button>
            </form>
{/* <p>{title} </p>
<p>{body} </p>
<p>{author} </p> */}


        </div>

     );
}
 
export default Create;


