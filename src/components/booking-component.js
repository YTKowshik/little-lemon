import { useEffect } from "react";
import BookingForm from "../components/forms/booking-form";

const Booking = () => {
    useEffect(()=>{
        document.title="Little Lemon | Booking";
    },[]);
    return (
        <BookingForm ></BookingForm>
    );
}
export default Booking;