import { useState } from "react";

const Create = ({hide_create}) => {

    const [data, setData] = useState({
        title: "",
        body: "",
});

    const heandleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {"title": data.title, "body": data.body, userId: 1}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newBlog)
        }).then(() => {
            setData({title: ''})
            setData({body: ''})
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
                 value={data.title}
                 onChange={(e) => {setData({title: e.target.value})}}
                 placeholder="Write your blog title"
                 ></input>
                 <label>Blog body:</label>
                <textarea 
                required
                value={data.body}
                onChange={(e) => {setData({body: e.target.value})}}
                placeholder="Write your blog body"
                ></textarea>
                <button>Post BLog</button>
            </form>
        </div>
     );
}
 
export default Create;