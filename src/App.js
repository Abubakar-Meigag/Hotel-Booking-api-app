import React from "react";
import "./App.css";
import DisplayBooking from "./hotel_booking_api/DisplayBooking";
import FindBookingByID from "./hotel_booking_api/FindBookingByID";
import PostNewBooking from "./hotel_booking_api/PostNewBooking";

function App() {
  // const [loading, setLoading] = useState(false);


  return (
    <div className="App">
      <div className="hotel-header">
        <h1>Beko CYF Luxury Hotel</h1>
      </div>
      <div className="input-div">
        <PostNewBooking />
      </div>
      <div className="find-display">
        <div className="find-div">
          <FindBookingByID />
        </div>
        <div className="display-div">
          <DisplayBooking />
        </div>
      </div>
    </div>
  );
}

export default App;
