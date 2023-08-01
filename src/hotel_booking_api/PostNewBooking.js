import React, { useState } from "react";
import axios from "axios";

const PostNewBooking = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const url =
    "https://abubakar-meigag-hotel-booking-api.glitch.me/api/hotel/booking";

  const newBooking = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, {
        title,
        firstName,
        surname,
        email,
        roomId,
        checkInDate,
        checkOutDate,
      });
      if (res.status === 201) {
        console.log("New Booking added successfully");
      } else {
        console.log("New Booking does not add successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setFirstName("");
    setSurname("");
    setEmail("");
    setCheckInDate("");
    setCheckOutDate("");
  };

  const handleTitle = (e) => setTitle(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleRoomId = (e) => setRoomId(e.target.value);
  const handleCheckInDate = (e) => setCheckInDate(e.target.value);
  const handleCheckOutDate = (e) => setCheckOutDate(e.target.value);

  return (
    <div className="input-item">
      <form>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          className="title"
          placeholder="Title..."
        />
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          className="firstName"
          placeholder="First Name..."
        />
        Surname
        <input
          type="text"
          value={surname}
          onChange={handleSurname}
          className="surname"
          placeholder="Surname..."
        />
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          className="email"
          placeholder="Email..."
        />
        RoomId:
        <input
          type="number"
          value={roomId}
          onChange={handleRoomId}
          className="roomId"
          placeholder="Room ID..."
        />
        Check In Date:
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInDate}
          className="checkInDate"
          placeholder="Check In Date..."
        />
        Check Out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutDate}
          className="checkInDate"
          placeholder="Check Out Date..."
        />
      </form>
      <div className="send-div">
        <button onClick={newBooking} className="send-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostNewBooking;
