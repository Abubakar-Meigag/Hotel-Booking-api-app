import './App.css';
import DisplayBooking from './hotel_booking_api/DisplayBooking';
import PostNewBooking from './hotel_booking_api/PostNewBooking';

function App() {
  return (
    <div className="App">
      <h1>Beko CYF Luxury Hotel</h1>
      <br />
      <PostNewBooking />
      <br />
      <DisplayBooking />
    </div>
  );
}

export default App;
