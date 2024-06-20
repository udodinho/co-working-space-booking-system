import React, { useState } from 'react';

const Booking = ({ desk, onSubmit }) => {
  const [hours, setHours] = useState(1);
  const [membership, setMembership] = useState("Basic");

  const handleBooking = () => {
    onSubmit(desk.id, hours, membership);
  };

  return (
    <div className="booking">
      <h2>Desk Booking {desk.id}</h2>
      {desk.type === 'Individual' && (
        <div>
          <label>
            Membership:
            <select value={membership} onChange={(e) => setMembership(e.target.value)}>
              <option value="Basic">Basic - ₦14000/hr</option>
              <option value="Premium">Premium - ₦21000/hr</option>
              <option value="Executive">Executive - ₦28000/hr</option>
            </select>
          </label>
        </div>
      )}
      <label>
        Hours:
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} min="1" />
      </label>
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default Booking;
