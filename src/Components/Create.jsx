/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";

const Create = ({setCreate, addPost}) => {

    let title, body = ''

    const heandleSubmit = useCallback((btn) => {
        btn.preventDefault()
        const newBlog = {"title": title, "body":body, userId: 1}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newBlog)
        })
        .then((response) => response.json())
        .then((json) => {
            addPost(json)
            setCreate()
    })
    })

    const changeTitle = useCallback((event) => {
        title = event.target.value
    }, [title])
    const changeBody = useCallback((event) => {
        body = event.target.value
    }, [title])

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={heandleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text"
                 required
                 onChange={changeTitle}
                 placeholder="Write your blog title"
                 />
                 <label>Blog body:</label>
                <textarea 
                required
                onChange={changeBody}
                placeholder="write your blog body"
                />
                <button>Post BLog</button>
            </form>
        </div>
     );
}
 
export default Create;