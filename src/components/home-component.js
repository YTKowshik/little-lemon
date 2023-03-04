import HighLights from "../components/highlights-component";
import Categories from "../components/categories-component";
import Dishes from "../components/dish-component";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
    return state;
  }
const initializeTimes =()=>{}
const Home = () => {
    const [availableTimes,dispatch] = useReducer(reducer,{},initializeTimes);

    const updateTimes=()=>{
        dispatch({});
    }
    useEffect(()=>{
        document.title="Little Lemon | Home";
    },[]);
    return (
        <main>
            <HighLights></HighLights>
            <Categories></Categories>
            <Dishes></Dishes>
        </main>
    );
}

export default Home;