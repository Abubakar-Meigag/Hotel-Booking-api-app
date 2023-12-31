import React, { useState } from "react";
import axios from "axios";
import DeleteBooking from "./DeleteBooking";

const DisplayBooking = () => {
  const [booking, setBooking] = useState([]);
  
  const url =
    "https://abubakar-meigag-hotel-booking-api.glitch.me/api/hotel/booking";

  const fetchBookings = async () => {
    try {
      const res = await axios.get(url);
      setBooking(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleBooking = () => {
    fetchBookings();
  };

  const onDeleteHandler = () => {
    fetchBookings();
  };

  return (
    <div className="booking-box">
      <div className="btn">
        <button onClick={handleBooking} className="booking-btn">
          <span className="box">Bookings</span>
        </button>
      </div>
          {booking.map((book, index) => (
            <div className="booking-details" key={index}>
              <div className="card2">
                <ul key={book.id}>
                  <li>{`ID: ${book.id}`}</li>
                  <li>{`Title: ${book.title}`}</li>
                  <li>{`First Name: ${book.firstName}`}</li>
                  <li>{`Surname: ${book.surname}`}</li>
                  <li>{`Email: ${book.email}`}</li>
                  <li>{`Room ID: ${book.roomId}`}</li>
                  <li>{`Check In: ${book.checkInDate}`}</li>
                  <li>{`Check Out: ${book.checkOutDate}`}</li>
                </ul>
                <DeleteBooking id={book.id} onDeleteHandler={onDeleteHandler} />
              </div>
            </div>
          ))}
    </div>
  );
};

export default DisplayBooking;
