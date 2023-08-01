import React, { useState } from "react";
import axios from "axios";

const FindBookingByID = () => {
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [searchById, setSearchById] = useState({});

  const url = `https://abubakar-meigag-hotel-booking-api.glitch.me/api/hotel/booking/`;

  const getBookingByID = async () => {
    try {
      const res = await axios.get(url + selectedBookingId);
      setSearchById(res.data);
    } catch (error) {
      console.error(error);
      setSearchById({});
    }
  };

  const handleSearchById = (e) => setSelectedBookingId(e.target.value);

  return (
    <div>
      <form>
        <input
          type="text"
          value={selectedBookingId}
          onChange={handleSearchById}
          className="searchById"
          placeholder="Search By Id..."
        />
      </form>
      <div className="getBookingByID">
        <button onClick={getBookingByID} className="id-btn">
          Get Book By Id
        </button>
      </div>
      <div className="find-details">
        {searchById.id && (
          <div>
            <h2>Booking Details</h2>
            <ul key={searchById.id}>
              <li>{`ID: ${searchById.id}`}</li>
              <li>{`Title: ${searchById.title}`}</li>
              <li>{`Firs Name: ${searchById.firstName}`}</li>
              <li>{`Surname: ${searchById.surname}`}</li>
              <li>{`Email: ${searchById.email}`}</li>
              <li>{`Room ID: ${searchById.roomId}`}</li>
              <li>{`Check In: ${searchById.checkInDate}`}</li>
              <li>{`Check Out: ${searchById.checkOutDate}`}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBookingByID;
