import { useEffect, useRef, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, submitForm, setBookingData }) => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const dateVal = new Date();
    const [validForm, setValidForm] = useState(false);
    const [dateData, setDateData] = useState("Enter Valid date");
    const [timeData, setTimeData] = useState("Enter valid time");
    const [guestData, setGuestData] = useState("Enter number of guests");
    const formElem = useRef();
    const dateRef = useRef();
    const guestRef = useRef();
    const timeRef = useRef();
    const occRef = useRef();
    const handleChange = (e) => {
        validateForm(e.currentTarget.id);
        setValidForm(formElem.current?.checkValidity() === true);
    }
    const validateForm = (e) => {
        switch (e) {
            case "dateVal":
                if (!dateRef.current.value || dateRef.current.value === '') {
                    setDateData("Date is required for booking");
                }
                else if (dateRef.current.value && dateRef.current.value < new Date()) {
                    setDateData("Date is required for booking");
                }
                else{
                    setDateData(null);
                }
                break;
            case "timeVal":
                if (!timeRef.current.value || timeRef.current.value === '') {
                    setTimeData("Time is required for booking");
                }else{
                    setTimeData(null);
                }
                break;
            case "guests":
                if (guestRef.current.value && guestRef.current.value > 10) {
                    setGuestData("Maximum 10 are allowed for booking");
                }else{
                    setGuestData(null);
                }
                break;
            default: break;
        }
    }
const isValid = () =>{
    return (dateRef.current?.value !== '' && guestRef.current?.value < 10);
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid()) {
            e.stopPropagation();
        }
        else {
            setValidated(true);
            setBookingData((prev) => {
                return {
                    ...prev, date: dateRef.current, time: timeRef.current,
                    occasion: occRef.current, guests: guestRef.current
                }
            });
            return submitForm() ? navigate('/confirmed-booking') : false;
        }
        
    }
    return (
        <Form noValidate validated={validated} ref={formElem} id="booking-form" onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Label htmlFor="dateVal">Choose date</Form.Label>
                <Form.Control isInvalid={dateRef.current?.value === ''} ref={dateRef} placeholder="" type="date" id="dateVal" onChange={handleChange} min={new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() + 1).toISOString().slice(0, 10)} />
                <Form.Control.Feedback type="invalid">{dateData}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="timeVal">Choose time</Form.Label>
                <InputGroup>
                    <Form.Select ref={timeRef} id="timeVal" isInvalid={timeRef.current?.value === ''}>
                        {availableTimes?.times?.map(x => { return <option key={`time_${x}`}>{x}</option> })}
                    </Form.Select>
                </InputGroup>
                <Form.Control.Feedback type="invalid">{timeData}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control isInvalid={guestRef.current?.value >10} ref={guestRef} type="number" defaultValue={0} min="0" id="guests" onChange={handleChange} required />
                <Form.Control.Feedback type="invalid">{guestData}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select ref={occRef} id="occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
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