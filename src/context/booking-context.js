import { createContext, useContext, useState,useReducer } from "react";
import { fetchAPI, submitAPI } from '../api/api';

const bookingContext = createContext();

export function BookingContextProvider ({children}) {
    const [bookingData, setBookingData] = useState({
        date: " ",
        times: [],
        guests: " ",
        occasion: " ",
    });
    const today = new Date();
    const initializeTimes = { times: fetchAPI(today) };
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);
    const submitForm = () => {
        const res = submitAPI(bookingData);
        if (res === true) {
            return true;
        } else {
            return false;
        }
    };
    function updateTimes(state, action) {
        if (action.type === "init") {
            return { times: fetchAPI(today) };
        }
        if (action.type === "update_times") {
            let selectedBookingDate = new Date(bookingData.date);
            let newTimes = fetchAPI(selectedBookingDate);//.map(x => x.split(":"));
            return { times: newTimes };
        }
    }
    return <bookingContext.Provider value={{bookingData,submitForm,availableTimes,setAvailableTimes,setBookingData}}>
        {children}
    </bookingContext.Provider>
}

export function useBooking(){
    return useContext(bookingContext);
}