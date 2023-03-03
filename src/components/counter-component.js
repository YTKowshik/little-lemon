import { Row,Col } from "react-bootstrap";

const CounterComponent=()=>{
    return <Row className="p-0 m-0 mt-2">
        <Col className="minus p-0 text-center">-</Col>
        <Col className="p-0 text-center">0</Col>
        <Col className="plus p-0 text-center">+</Col>
    </Row>
}
export default CounterComponent;