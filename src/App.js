import './App.css';
// import DeleteBooking from './hotel_booking_api/DeleteBooking';
import DisplayBooking from './hotel_booking_api/DisplayBooking';
import PostNewBooking from './hotel_booking_api/PostNewBooking';

function App() {
  return (
    <div className="App">
      <div className="hotel-header">
        <h1>Beko CYF Luxury Hotel</h1>
      </div>
      <div className="input-div">
        <PostNewBooking />
      </div>
      <DisplayBooking />
    </div>
  );
}

export default App;
