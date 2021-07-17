import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //useState hook syntax. Making a variable reactive
    const [name, setName] = useState("mario");
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    const hello = () => {
        console.log("hello from console");
        setName("luigi");
    }

    const helloinput = (name) => {
        console.log("hello " + name)
    }

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs)
    } */

    

    return (
        <div className="home">
            {error? error:null}
            {isPending? <p>loading</p>:null}
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={hello}>Click me</button>
            <button onClick={() => helloinput("jack")}> Click me 2</button>
            <p> ------- </p>
            {<BlogList blogs={blogs} title="All blogs"/>}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog" />
        </div>
    );
}

export default Home;
