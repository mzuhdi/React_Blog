//import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //useState hook syntax. Making a variable reactive
    //const [name, setName] = useState("mario");
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

/*     const hello = () => {
        console.log("hello from console");
        setName("luigi");
    }

    const helloinput = (name) => {
        console.log("hello " + name)
    } */

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs)
    } */

    

    return (
        <div className="home">
            {error? error:null}
            {isPending? <p>loading</p>:null}
            {<BlogList blogs={blogs} title="All blogs"/>}
        </div>
    );
}

export default Home;
