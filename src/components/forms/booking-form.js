import { Form, Button, InputGroup } from "react-bootstrap";

const BookingForm = () => {
    return (
        <Form id="booking-form" >
            <Form.Group>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control type="date" id="res-date" min={new Date().toISOString().slice(0, 10)} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <InputGroup>
                <Form.Control type="time"></Form.Control>
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
            <Button className="mt-3" id="btn-Reserve" variant="primary" type="submit">
                Make Your reservation
            </Button>
        </Form>
    );
};

export default BookingForm;