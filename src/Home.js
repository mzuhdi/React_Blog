import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    //useState hook syntax. Making a variable reactive
    const [name, setName] = useState("mario");
    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );

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

    useEffect( () => {
        console.log("use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={hello}>Click me</button>
            <button onClick={() => helloinput("jack")}> Click me 2</button>
            <p> ------- </p>
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog"/>
        </div>
    );
}

export default Home;
