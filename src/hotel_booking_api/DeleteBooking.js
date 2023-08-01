import React from 'react'
import axios from 'axios'

const DeleteBooking = ({ id, onDeleteHandler }) => {
  const url = ` https://abubakar-meigag-hotel-booking-api.glitch.me/api/hotel/booking/${id}`;

  const deleteBooking = async () => {
    try {
      const res = await axios.delete(url);
      if (res.status === 200) {
        console.log("Booking with id has been deleted successfully");
      } else {
        console.log("message: booking for ID requested is not found");
      }
    } catch (error) {
      console.log(error);
    }
      onDeleteHandler()
  };

  return (
    <div>
      <button className="delete-btn" onClick={deleteBooking}>
        Delete Booking
      </button>
    </div>
  );
};

export default DeleteBooking;