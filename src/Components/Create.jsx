import { useState } from "react";

const Create = ({hide_create, add_post}) => {

    const [data, setData] = useState({
        title: "",
        body: "",
});
    const heandleSubmit = (btn) => {
        btn.preventDefault()
        const newBlog = {"title": data.title, "body":data.body, userId: 1}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(newBlog)
        })
        .then((response) => response.json())
        .then((json) => {
            setData({title: ''})
            setData({body: ''})
            add_post(json)
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
                 />
                 <label>Blog body:</label>
                <textarea 
                required
                value={data.body}
                onChange={(e) => {setData({...data, body: e.target.value})}}
                />
                <button>Post BLog</button>
            </form>
        </div>
     );
}
 
export default Create;