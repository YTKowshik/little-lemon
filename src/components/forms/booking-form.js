import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
const BookingForm = ({ availableTimes, submitForm, setBookingData }) => {
    const navigate = useNavigate();
    const dateVal = new Date();
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            noOfGuests: 1,
            occasion: '',
        },
        onSubmit: (values) => {
            setBookingData();
            return submitForm() ? navigate('/confirmed-booking') : false;
        },
        validationSchema: Yup.object({
            date: Yup.string(),
            time: Yup.string(),
            noOfGuests: Yup.number().max(10,"Select number of seats to be booked"),
            occasion: Yup.string(),
        }).required(),
    });
    return (
        <Form id="booking-form" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }} >
            <Form.Group>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control type="date" id="res-date" min={new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() + 1).toISOString().slice(0, 10)}
                    value={formik.values.date} />
                <Form.Label>{formik.errors.date ? formik.errors.date : null}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <InputGroup>
                    <Form.Select id="res-time">
                        {availableTimes?.times?.map(x => { return <option key={`time_${x}`}>{x}</option> })}
                    </Form.Select>
                </InputGroup>
                <Form.Label>{formik.errors.time ? formik.errors.time : null}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control type="number" placeholder="1" id="guests"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.noOfGuests} />
                <Form.Label>{formik.errors.noOfGuests ? formik.errors.noOfGuests : null}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select id="occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
                <Form.Label>{formik.errors.occasion ? formik.errors.occasion : null}</Form.Label>
            </Form.Group>
            <div className="m-0 p-0 d-flex align-center justify-center submit-div">
                <Button className="mt-3" variant="primary" type="submit" disabled={formik.errors}>
                    Make Your reservation
                </Button>
            </div>
        </Form>
    );
};

export default BookingForm;