const BookingForm = () => {
    const arrMinutes = [];
    const arrHours=[];
    for(let i=10;i<22;i++){
        arrHours.push(<option key={"opt_"+i}>{`${i}`.padStart(2,"0")}</option>);
    }
    for(var j=0;j<60;j+=15){
        arrMinutes.push(<option key={"opt_"+j}>{`${j}`.padStart(2,"0")}</option>);
    }
    return (
        <form >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                {arrHours}
            </select>
            <label htmlFor="res-min">Choose time</label>
            <select id="res-min">
                {arrMinutes}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;