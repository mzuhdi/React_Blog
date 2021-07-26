import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch'

function BlogDetails() {

    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending? <div>loading..</div> : null }
            { error? <div> { error } </div> : null }
            { blog? <article>
                <h2>{ blog.title }</h2>
                <p>Written by {blog.author}</p>
                <div>{ blog.body }</div>
            </article> : null}
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default BlogDetails
