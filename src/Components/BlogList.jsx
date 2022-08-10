const BlogList = ({blogs, search}) => {

    return ( 
        <div className="blog-list">
            { blogs.filter((blog) => {
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
                    <p>{blog.body}</p>
                </div>
                )
            })}
        </div>
     );
}
 
export default BlogList;