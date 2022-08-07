import { useState } from "react";

const BlogList = ({blogs}) => {

const [search, setSearch] = useState('')
    return ( 
        <div className="blog-list">
            <p className="search">Search for anything</p>
            <input type="text" onChange={event => {setSearch(event.target.value);}}/>
            {blogs.filter((blog) => {
                if (search === "") {
                    return blog
                } else if (blog.title.toLocaleLowerCase().includes(search.toLowerCase()) || blog.body.toLocaleLowerCase().includes(search.toLowerCase()) ) {
                    return blog
                }
            }
            ).map((blog) => {
                return(
                <div className="blog-preview" key={blog.id}>
                    <p>Post ID: {blog.id}</p>
                    ----------------------------------------
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.body}</p>
                </div>
                )
            })}
        </div>
     );
}
 
export default BlogList;