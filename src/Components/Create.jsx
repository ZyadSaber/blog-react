import { useState } from "react";

const Create = ({hide_create}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const heandleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {title, body, "userId":1}

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newBlog)
        }).then(() => {
            setTitle('')
            setBody('')
            hide_create()
    })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
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