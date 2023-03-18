import { useEffect } from "react";
import BookingForm from "../components/forms/booking-form";
import { useBooking } from "../context/booking-context";

const Booking = () => {
    const { availableTimes,setBookingData,submitForm} = useBooking();
    useEffect(()=>{
        document.title="Little Lemon | Booking";
    },[]);
    return (
        <BookingForm 
        availableTimes={availableTimes} 
        submitForm={submitForm} 
        setBookingData={setBookingData} ></BookingForm>
    );
}
export default Booking;