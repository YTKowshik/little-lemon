import { Container, Row, Col } from "react-bootstrap";
import CounterComponent from "../components/counter-component";

const DishCard = (props) => {
    return <Container fluid className="dish-card">
        <Row className="d-flex justify-center">{props.dish.dishname}</Row>
        <Row className="w-100 m-0">
            <Col xs={9} >
                <Row className="dish-row">{props.dish.dishDescription}</Row>
            </Col>
            <Col xs={3} className="d-flex align-center justify-center">
                <img width={60} height={60} src={require(`../assets/images/${props.dish.dishImage}`)} alt={props.dish.dishImage} />
            </Col>
        </Row>
        <Row className="d-flex w-100 m-0" >
            <Col xs={9} className="p-0 mt-2">{'$'+props.dish.price}</Col>
            <Col xs={3} className="p-0 ml-2">
                <CounterComponent></CounterComponent>
            </Col>
        </Row>
    </Container>;
}
export default DishCard;