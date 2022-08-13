import React from "react";
import { useCallback, useState } from "react";

const Create = ({hideCreate, setData, data}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const heandleSubmit = (btn) => {
        btn.preventDefault()
        const blog = {"title": title, "body": body, userId:1 }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(blog)
        })
        .then((response) => response.json())
        .then((json) => {
            setData([...data, json])
            hideCreate()  
    })
    }
        const changeTitle =useCallback((event) => {
        setTitle(event.target.value)
    },[setTitle])
    const changeBody = useCallback((event) => {
        setBody(event.target.value)
    },[setBody])



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
 
export default React.memo(Create);