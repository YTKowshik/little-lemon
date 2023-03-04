import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        document.title="Little Lemon | About";
    },[]);
    return (
        <h1>About Page</h1>
    );
}
 
export default About;