import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

const BookingForm = ({availableTimes}) => {
    return (
        <Form id="booking-form" >
            <Form.Group>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control type="date" id="res-date" min={new Date().toISOString().slice(0, 10)} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <InputGroup>
                    <Form.Select id="res-time">
                        {availableTimes?.times?.map(x => {return <option key={`time_${x}`}>{x}</option>})}
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control type="number" placeholder="1" min="1" max="10" id="guests" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
            </Form.Group>
            <div className="m-0 p-0 d-flex align-center justify-center submit-div">
                <Button className="mt-3" variant="primary" type="submit">
                    Make Your reservation
                </Button>
            </div>
            <Row className="m-0 p-0 d-flex align-center justify-center bottom-bar">
                <Col></Col>
                <Col></Col>
            </Row>
        </Form>
    );
};

export default BookingForm;