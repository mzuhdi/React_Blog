import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    //useState hook syntax. Making a variable reactive
    const [name, setName] = useState("mario");
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const hello = () => {
        console.log("hello from console");
        setName("luigi");
    }

    const helloinput = (name) => {
        console.log("hello " + name)
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogss")
            .then((res) => {
                if(!res.ok){
                    throw Error("could not fetch the resource");
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((err) =>{
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            {error? error:null}
            {isPending? <p>loading</p>:null}
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={hello}>Click me</button>
            <button onClick={() => helloinput("jack")}> Click me 2</button>
            <p> ------- </p>
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog" />
        </div>
    );
}

export default Home;
