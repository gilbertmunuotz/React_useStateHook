import { useState } from "react";

const Home = () => {


    const [name, setName] = useState('gilbert')
    const [age, setAge] = useState(20)
    // let name = "gilbert";
    // const handleClick = () => { //Unaweza Ipa Jina Function Yako Kwa kutumia variable au Ukaacha tu kawaid 
    //     console.log("You've Clicked Me");
    // }

    const handleClick = () => {
        setName('Andrew');
        setAge(21);
    }

    return (
        <div className="home">
            <h1>Homepage</h1>
            <h2>{name} is {age} Years Old</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home