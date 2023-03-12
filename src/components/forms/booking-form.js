import { useRef, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, submitForm, setBookingData }) => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const dateVal = new Date();
    const [validForm, setValidForm] = useState(false);
    const formElem = useRef();
    const handleChange = (e) => {
        if(formElem.current.checkValidity() === false){setValidForm(false);}
        if(formElem.current.checkValidity() === true){setValidForm(true);}
    }
    const handleSubmit = (e) => {
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.currentTarget.checkValidity() === true) {
            setBookingData();
            return submitForm() ? navigate('/confirmed-booking') : false;
        }
        setValidated(true);
    }
    return (
        <Form noValidate validated={validated} ref={formElem} id="booking-form" onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control required placeholder="" type="date" id="res-date" onChange={handleChange} min={new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() + 1).toISOString().slice(0, 10)} />
                <Form.Control.Feedback type="invalid">Please select a date for booking</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <InputGroup>
                    <Form.Select id="res-time">
                        {availableTimes?.times?.map(x => { return <option key={`time_${x}`}>{x}</option> })}
                    </Form.Select>
                </InputGroup>
                <Form.Control.Feedback type="invalid">{ }</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control type="number" defaultValue={0} min="0" id="guests" onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">Enter number of guests</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select id="occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{ }</Form.Control.Feedback>
            </Form.Group>
            <div className="m-0 p-0 d-flex align-center justify-center submit-div">
                <Button className="mt-3" variant="primary" type="submit" disabled={!validForm}>
                    Make Your reservation
                </Button>
            </div>
        </Form>
    );
};

export default BookingForm;