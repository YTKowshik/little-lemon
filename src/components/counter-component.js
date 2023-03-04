import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const CounterComponent = () => {
    const [countVal, setCounter] = useState(0);
    const increment = () => {
        setCounter(countVal + 1);
    }
    const decrement = () => {
        setCounter(countVal === 0 ? 0 : countVal - 1);
    }
    return <Row className="p-0 m-0 ms-2 mt-2">
        <Col className="p-0" >
            <Button bsPrefix="minus p-0 text-center" onClick={decrement} >-</Button>
        </Col>
        <Col className="p-0 text-center">{countVal}</Col>
        <Col  className="p-0" >
            <Button bsPrefix="plus p-0 text-center" onClick={increment} >+</Button>
        </Col>
    </Row>
}
export default CounterComponent;