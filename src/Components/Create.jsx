import {memo} from "react";
import { useCallback, useState } from "react";

const Create = ({hideCreate, setData, data}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const postData=useCallback(async(btn)=>{
    btn.preventDefault()
    const blog = {"title": title, "body": body, userId:1 }
    const response=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(blog)
    });
    const blogData=await response.json();
    setData([...data, blogData])
    hideCreate()
},[])
    const changeTitle =useCallback((event) => {
        setTitle(event.target.value)
    },[setTitle])
    const changeBody = useCallback((event) => {
        setBody(event.target.value)
    },[setBody])

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={postData}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={changeTitle}
                placeholder="Write your blog title"
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={changeBody}
                placeholder="write your blog body"
                />
                <button>Post BLog</button>
            </form>
        </div>
     );
}
 
export default memo(Create);