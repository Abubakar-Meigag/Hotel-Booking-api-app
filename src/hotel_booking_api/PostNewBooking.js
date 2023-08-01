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
    <div className="input-div">
      <form>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          className="input-item"
          placeholder="Title..."
        />
        <br />
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          className="input-item"
          placeholder="First Name..."
        />
        <br />
        Surname
        <input
          type="text"
          value={surname}
          onChange={handleSurname}
          className="input-item"
          placeholder="Surname..."
        />{" "}
        <br />
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          className="input-item"
          placeholder="Email..."
        />{" "}
        <br />
        RoomId:
        <input
          type="number"
          value={roomId}
          onChange={handleRoomId}
          className="input-item"
          placeholder="Room ID..."
        />{" "}
        <br />
        Check In Date:
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInDate}
          className="input-item"
          placeholder="Check In Date..."
        />
        <br />
        Check Out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutDate}
          className="input-item"
          placeholder="Check Out Date..."
        />
      </form>
      <button onClick={newBooking} className="send-btn">
        Send
      </button>
    </div>
  );
};

export default PostNewBooking;
