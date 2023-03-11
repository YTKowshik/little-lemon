import HighLights from "../components/highlights-component";
import Categories from "../components/categories-component";
import Dishes from "../components/dish-component";
import { useEffect} from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Little Lemon | Home";
    }, []);
    return (
        <main>
            <HighLights />
            <Categories />
            <Dishes />
        </main>
    );
}

export default Home;