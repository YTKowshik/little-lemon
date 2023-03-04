import { useEffect } from "react";
import BookingForm from "../components/forms/booking-form";
import { useLocation } from 'react-router-dom';

const Booking = () => {
    const locData=useLocation();
    useEffect(()=>{
        document.title="Little Lemon | Booking";
    },[]);
    return (
        <BookingForm availableTimes={locData.state.availableTimes} ></BookingForm>
    );
}
export default Booking;