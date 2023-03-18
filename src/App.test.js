import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home-component';
import BookingForm from './components/forms/booking-form';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Little Lemon/i);
  expect(linkElement?.length).toBeGreaterThan(0);
});
const bookingData = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const availableTimes = {
  times: ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"],
};

test("Check homepage for Render", () => {
  render(
    <Router>
      <Home></Home>
    </Router>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test("check  Available Times", () => {
  expect(availableTimes.times[0]).toBe("17:00");
});

test("check form inputs", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();

  const occasion = screen.getByTestId("occasion");
  expect(occasion).toBeInTheDocument();

  const guests = screen.getByTestId("guests");
  expect(guests).toBeInTheDocument();

  const time = screen.getByTestId("time");
  expect(time).toBeInTheDocument();
});

test("if submit is disabled", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
  expect(submit.textContent).toBe("Make Your Reservation");

  expect(submit).toBeDisabled();
}
);