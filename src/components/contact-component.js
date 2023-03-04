import { useEffect } from "react";

const Contact = () => {
    useEffect(()=>{
        document.title="Little Lemon | Contact us";
    },[]);
    return (
        <h1>Contact Page</h1>
    );
}
 
export default Contact;