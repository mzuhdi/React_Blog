import { Link } from "react-router-dom"

const BlogList = ({blogs, title, handleDelete}) => {

    //Props: passing down info from parents to child components, can bypass doing this by 
    //just passing it like an argument as shown above
    //const blogs = props.blogs;
    //const title = props.title;
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        </Link>
                        <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    </div>
                ))}
        </div>
    )
}

export default BlogList
