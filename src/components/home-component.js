import HighLights from "../components/highlights-component";
import Categories from "../components/categories-component";
import Dishes from "../components/dish-component";
import { useState, useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from '../api/api';
const Home = () => {
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
    useEffect(() => {
        document.title = "Little Lemon | Home";
    }, []);
    return (
        <main>
            <HighLights bookingData={bookingData}
                setBookingData={setBookingData}
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={submitForm} ></HighLights>
            <Categories></Categories>
            <Dishes ></Dishes>
        </main>
    );
}

export default Home;