import { Link } from "react-router-dom";

const ConfirmedBooking =() => {

    return <>
        <p>Your booking has been confirmed.</p>
        <Link to="/home"  >Return to Home</Link>
    </>
}

export default ConfirmedBooking;