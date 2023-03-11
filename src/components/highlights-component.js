import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import globals from '../../src/globals';
import restaurantLogo from '../../src/assets/images/restauranfood.jpg';
const HighLights = () => {

    return <div className="lil-lemon-highlight">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <div className="m-2 d-inline-flex flex-row">
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <img width={150} height={150} src={restaurantLogo} alt={"restaurant"}></img>
        </div>
        <Link to={globals.NAV_BOOKING} ><Button bsPrefix="reserve-table">Reserve a table</Button></Link>
    </div>;
}

export default HighLights;