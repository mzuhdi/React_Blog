import { useState } from "react"

const Home = () => {

    //useState hook syntax. Making a variable reactive
    const[name, setName] = useState("mario")

    const hello = () => {
        console.log("hello from console");
        setName("luigi");
    }

    const helloinput = (name) => {
        console.log ("hello " + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={hello}>Click me</button>
            <button onClick={() => helloinput("jack")}> Click me 2</button>
        </div>
    );
}

export default Home;
