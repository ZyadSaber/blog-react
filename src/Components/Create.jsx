import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [message, setMessage] = useState('')

    const heandleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {title, body, "userId":1}
        console.log(newBlog)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newBlog)
        }).then(() => {
            setMessage("A new blog has been added")
            setTitle('')
            setBody('')
    })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <p>{message}</p>
            <form onSubmit={heandleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text"
                 required
                 value={title}
                 onChange={(e) => {setTitle(e.target.value)}}
                 placeholder="Write your blog title"
                 ></input>
                 <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => {setBody(e.target.value)}}
                placeholder="Write your blog body"
                ></textarea>
                <button>Post BLog</button>
            </form>
        </div>
     );
}
 
export default Create;